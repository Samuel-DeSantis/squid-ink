import { useState } from 'react'

function SignIn() {

  const URL = 'http://localhost:8080'
  // const navigate = useNavigate()
  const [form, setForm] = useState({
    username: '',
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
      response = await fetch(`${URL}/sign_in`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user)
      })
      .then(res => res.json())
      .then(result => console.log(result))
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
        username: '',
        password: '',
      })
      // navigate('/')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <label htmlFor="" style={{display: "flex"}}>Username:
        <input 
          type="text"
          name="username"
          value={form.username}
          id="username" 
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

export default SignIn