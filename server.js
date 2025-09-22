const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000

const groups = require('./data/groups.json') // ajusta la ruta según el archivo real

app.use(cors())

app.get('/api/groups', (req, res) => {
  res.json(groups)
})

app.listen(PORT, () => {
  console.log(`🚀 Hallyu API running at http://localhost:${PORT}`)
})
