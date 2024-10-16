import { useState } from 'react'

function SignUp() {

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
      response = await fetch(`${URL}/sign_up`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      })
      if (!response.ok) {
        let error_message
        switch (response.status) {
          case 409:
            error_message = '409 - Username already exists.'
            break;
          default:
            break;
        }
        throw new Error(error_message)
      }
    } catch (error) {
      alert(error)
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
    <form onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
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
          type="email"
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
  )
}

export default SignUp