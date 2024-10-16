import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'

function Navbar() {

  const { user, sign_in, sign_out } = useContext(UserContext)

  const SignOut = () => sign_out()
  const showUser = () => console.log(user)

  return (
    <nav>
      <Link to='/'>HOME</Link>
      <div>
        <Link to='/sign_in'>SIGN IN</Link>
        <Link to='/sign_up'>SIGN UP</Link>
        <button onClick={showUser}>Show User</button>
        <button onClick={SignOut}>Sign Out</button>
        { user ? (
          <>
            <Link to='/dashboard'>DASHBOARD</Link>
            <Link to='/user'>USER</Link>
          </>
        ) : (
          <p>please sign in</p>
        )}
      </div>
    </nav>

  )
}

export default Navbar