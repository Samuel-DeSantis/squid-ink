import { useState } from 'react'

import style from './style.module.css'

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
    <div className={ style.formContainer }>
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className={ style.formGroup }>
          <label htmlFor="">First Name:</label>
          <input
            type="text"
            name="first_name"
            value={form.first_name}
            id="first_name"
            onChange={handleChange}
          />
        </div>
        <div className={ style.formGroup }>
          <label htmlFor="">Last Name:</label>
          <input
            type="text"
            name="last_name"
            value={form.last_name}
            id="last_name"
            onChange={handleChange}
          />
        </div>
        <div className={ style.formGroup}>
          <label htmlFor="">Username:</label>
          <input
            type="text"
            name="username"
            value={form.username}
            id="username"
            onChange={handleChange}
          />
        </div>
        <div className={ style.formGroup}>
          <label htmlFor="">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className={ style.formGroup}>
          <label htmlFor="">Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            id="password"
            onChange={handleChange}
          />
        </div>
        <div className={ style.formGroup }>
          <input
            className={ style.submit}
            type="submit"
            name="Submit"
          />
        </div>
      </form>
    </div>
  )
}

export default SignUp