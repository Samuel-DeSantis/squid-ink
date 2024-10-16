import express from 'express'

// Supabase DB Connection
import db from '../db/connection.js'
import Authenticator from '../middleware/authenticator.js'

const router = express.Router()
const auth = new Authenticator()

router.post('/sign_up', async (req, res) => {

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

router.post('/sign_in', async (req, res) => {

  let { data, error } = await db
    .from('users')
    .select('*')
    .eq('username', req.body.username)
    .limit(1)
    .single()
  
  const is_password = await auth.check(req.body.password, data.password_digest)
  delete data["password_digest"]
  res.send(data).status(200)
})

// router.patch('/:id', async (req, res) => {
//   // TODO: Add edit to user
// })

// router.delete('/:id',  async (req, res) => {
//   // TODO: Add delete to user
// })

export default router