const User = require('../models/User')

const createUser = async (req, res) => {
  const { firstName, lastName } = req.body

  try {
    const newUser = new User({ firstName, lastName })
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (error) {
    console.error(error.message)
    res.status(500).send('Server error')
  }
}

module.exports = { createUser }