import { useContext, useRef, useState } from 'react'
import {useNavigate } from 'react-router-dom'
import UserContext from '../../../context/UserContext'

import style from './style.module.css'

function SignIn() {
  const { user, sign_in, sign_out } = useContext(UserContext)

  const URL = 'http://localhost:8080'
  const navigate = useNavigate()
  const usernameRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = async e => {
    e.preventDefault()
    console.log(usernameRef.current.value, passwordRef.current.value)
    const userForm = {
      username: usernameRef.current.value,
      password: passwordRef.current.value
    }
    try {
      let response
      response = await fetch(`${URL}/sign_in`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userForm)
      })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        sign_in({
          first_name: result.first_name,
          last_name: result.last_name,
          username: result.username,
          email: result.email,
        })
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
      console.error(error)
    } finally {
      navigate('/dashboard')
    }
  }

  return (
    <div className={ style.formContainer }>
      <form onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className={ style.formGroup }>
          <label htmlFor="" >Username:</label>
          <input
            className={ style }
            type="text"
            name="username"
            id="username"
            ref={usernameRef}
          />
        </div>
        <div className={ style.formGroup }>
          <label htmlFor="" >Password:</label>
          <input
            className={ style }
            type="password"
            name="password"
            id="password"
            ref={passwordRef}
          />
        </div>
          <div className={ style.formGroup }>
            <input
              className={ style.submit }
              type="submit"
              name="Submit"
            />
          </div>
      </form>
    </div>
  )
}

export default SignIn