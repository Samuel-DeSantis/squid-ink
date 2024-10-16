import { useContext } from 'react'
import UserContext from '../../context/UserContext'

function User() {

  const { user, sign_in, sign_out } = useContext(UserContext)

  return (
    <div>
      <h2>User Information:</h2>
      <div>Name: { user.first_name } { user.last_name }</div>
      <div>Username: { user.username }</div>
      <div>Email: { user.email }</div>
    </div>
  )
}

export default User