import express from 'express'
import cors from 'cors'

import userRouter from './routes/user.js'
// import projectRouter from './routes/project.js'
// import circuitScheduleRouter from './routes/circuit_schedule.js'

const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/test', (req, res) => {
  res.send({'msg': 'hello world!'})
})

app.use('/', userRouter)
// app.use('/projects', projectsRouter) 
// app.use('/circuitss', circuitScheduleRouter) 

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`)
})