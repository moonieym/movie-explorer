export default function handler(req, res) {
  const groups = require('../data/groups.json') // ajusta la ruta según tu archivo
  res.status(200).json(groups)
}
