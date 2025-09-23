import groups from './data/groups.json' assert { type: 'json' }

export default function handler(req, res) {
  res.status(200).json(groups)
}
