import express from 'express'
import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import cors from 'cors'
import dotenv from 'dotenv'
import User from './models/User.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.MONGO_URI)

const JWT_SECRET = process.env.JWT_SECRET

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })
  if (userExists) return res.status(400).json({ error: 'Usuário já cadastrado' })

  const hashed = await bcrypt.hash(password, 10)
  const user = await User.create({ name, email, password: hashed })

  res.json({ message: 'Usuário criado com sucesso', user: { name, email } })
})

app.post('/login', async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })
  if (!user) return res.status(400).json({ error: 'Usuário não encontrado' })

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) return res.status(400).json({ error: 'Senha incorreta' })

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' })

  res.json({ token, user: { name: user.name, email: user.email } })
})

app.get('/', (req, res) => {
  res.send('API MuscleMax Rodando ✔️')
})

app.listen(5000, () => console.log('Servidor rodando na porta 5000 🚀'))
