import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {

  const URL = 'http://localhost:8080'
  // const navigate = useNavigate()
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setForm(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const user = { ...form }
    try {
      let response
      response = await fetch(`${URL}/user`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      })
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`)
      }
    } catch (error) {
      alert('A problem has occured with your fetch operation', error)
    } finally {
      setForm({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
      })
      // navigate('/')
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>

        <label htmlFor="" style={{display: "flex"}}>First Name:
          <input 
            type="text"
            name="first_name"
            value={form.first_name}
            id="first_name" 
            onChange={handleChange}
            />
        </label>

        <label htmlFor="" style={{display: "flex"}}>Last Name:
          <input 
            type="text"
            name="last_name"
            value={form.last_name}
            id="last_name" 
            onChange={handleChange}
            />
        </label>
        
        <label htmlFor="" style={{display: "flex"}}>Username:
          <input 
            type="text"
            name="username"
            value={form.username}
            id="username" 
            onChange={handleChange}
            />
        </label>

        <label htmlFor="" style={{display: "flex"}}>Email:
          <input 
            type="text"
            name="email"
            value={form.email}
            id="email" 
            onChange={handleChange}
            />
        </label>

        <label htmlFor="" style={{display: "flex"}}>Password:
          <input 
            type="password"
            name="password"
            value={form.password}
            id="password" 
            onChange={handleChange}
            />
        </label>

        <input type="submit" name="Submit" id="" />

      </form>
    </>
  )
}

export default App
