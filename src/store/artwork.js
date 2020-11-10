const AWS = require('aws-sdk')
const s3 = new AWS.S3({
  accessKeyId: 'AKIAJZNABHO4OGIVVKQQ',
  secretAccessKey: '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',
  Bucket: 'arpaintings'
});
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
            paintingObj.id = idx + 1
            paintingObj.name = data.Metadata.name
            paintingObj.date = data.Metadata.date
          })

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
