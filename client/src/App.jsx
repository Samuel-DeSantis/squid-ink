import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'
import SignIn from './pages/public/SignIn'
import SignUp from './pages/public/SignUp'

const UserContext = createContext()

function App() {

  // const [user, setUser] = useState({
  //   first_name: '',
  //   last_name: '',
  //   username: '',
  //   email: '',
  // })

  return (
    <>
      <SignIn />
      <SignUp />
    </>
  )
}

export default App
