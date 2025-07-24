const router = require('express').Router()

const User = require('../models/User')

router.post('/', async (req, res) => {

  const { name, salary, approved } = req.body

  if(!name) {
    res.status(422).json({ error: 'O nome é obrigatório!' })
    return
  }

  const user = {
    name,
    salary,
    approved,
  }

  try {

    await User.create(user)

    res.status(201).json({ message: 'Cadastrado criado!'})

  } catch(error) {
    res.status(500).json({ error: error })
  }
})

router.get('/', async (req, res) => {

  try {

    const users = await User.find()

    res.status(200).json(users)

  } catch(error) {
    res.status(500).json({ error: error })
  }

})

router.get('/:id', async (req, res) => {

  const id = req.params.id

  try {

    const user = await User.findById(id)

    if(!user) {
      res.status(422).json({ message: 'Usuário não encontrado!' })
      return
    }

    res.status(200).json(user)

  } catch(error) {
    res.status(500).json({ error: error })
  }
})

module.exports = router