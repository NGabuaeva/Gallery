import { s3 } from '../secrets'

const bucketParams = {
  Bucket: 'arpaintings',
}


const GOT_ALL_ARTWORK = 'GOT_ALL_ARTWORK'


const gotAllArtwork = (artwork) => ({
  type: GOT_ALL_ARTWORK,
  artwork
})

export const getArtwork = () => async dispatch => {
  try {
    console.log('in store')
    await s3.listObjectsV2(bucketParams, function (err, data) {
      if (err) {
        console.log('Error:', err)
      } else {
        const bucket = data.Contents
        const allPaintings = []
        bucket.forEach((painting, idx) => {
          let paintingObj = {}
          const params = {
            Bucket: 'arpaintings',
            Key: bucket[idx].Key
          }

          s3.getObject(params, function (err, data) {
            console.log('data:', data)
            paintingObj.name = data.Metadata.name
            paintingObj.date = data.Metadata.date
          })

          paintingObj.id = idx + 1

          paintingObj.url = s3.getSignedUrl('getObject', {
            Bucket: 'arpaintings',
            Key: bucket[idx].Key,
            Expires: 60
          })

          allPaintings.push(paintingObj)
        })

        dispatch(gotAllArtwork(allPaintings))
      }
    })
  } catch (error) {
    console.log(error)
  }
}

export const artwork = (state = [], action) => {
  switch (action.type) {
    case GOT_ALL_ARTWORK:
      return action.artwork

    default:
      return state
  }
}
