const router = require('express').Router()
const s3 = require('../secrets')

function shufflePaintings(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

router.get('/', async (req, res, next) => {
  try {
    const bucketParams = {
      Bucket: 'arpaintings',
    }
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
            try {
              paintingObj.name = data.Metadata.name
              paintingObj.date = data.Metadata.date
            } catch (error) {
              console.log(error)
            }

          })

          paintingObj.id = idx + 1

          paintingObj.url = s3.getSignedUrl('getObject', {
            Bucket: 'arpaintings',
            Key: bucket[idx].Key,
            Expires: 60
          })

          allPaintings.push(paintingObj)
        })

        res.json(shufflePaintings(allPaintings))
      }
    })
  } catch (error) {
    console.log(error)
  }
})

module.exports = router
