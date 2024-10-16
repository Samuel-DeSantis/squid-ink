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

app.post('/sign_up', async (req, res) => {

  const password_digest = await auth.hash(req.body.password)

  const user = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    username: req.body.username,
    email: req.body.email,
    password_digest: password_digest,
  }

    let { data, error } = await db
    .from('users')
    .insert([user])
    .select('*')
    if(error) {
      console.error(error)
      res.send('Error adding record').status(409) // 409 - Conflict
    } else {
      res.send(data).status(200) // 200 - OK
    }
})

app.post('/sign_in', async (req, res) => {

  let { data, error } = await db
    .from('users')
    .select('*')
    .eq('username', req.body.username)
    .limit(1)
    .single()


  
  const is_password = await auth.check(req.body.password, data.password_digest)
  console.log(is_password)

  delete data["password_digest"]
  console.log(data)

  res.send(data).status(200)
})

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})