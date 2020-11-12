const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'build')));


app.use('/api', require('./api'))

app.listen(PORT, () =>
  console.log(`Mixing it up on port ${PORT}`)
)
