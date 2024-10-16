import express from 'express'
import bcrypt from 'bcrypt'
import cors from 'cors'

// Supabase DB Connection
import db from './db/connection.js'

import Authenticator from './middleware/authenticator.js'

const PORT = process.env.PORT || 8080
const app = express()

const auth = new Authenticator()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send({'msg': 'hello'})
})

app.post('/user', async (req, res) => {
  // console.table(req.body)
  console.log(req.body)
  const password_digest = await auth.hash(req.body.password)
  console.log(password_digest)

  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    password: password_digest,
  }

  let { data, error } = await db
    .from('users')
    .insert([user])
    .select('*')

  res.send('POST').status(200)
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})