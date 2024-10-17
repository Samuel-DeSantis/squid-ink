import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'

import style from './nav.module.css'

function Navbar() {

  const { user, sign_in, sign_out } = useContext(UserContext)
  // const showUser = () => console.log(user)

  return (
    <nav>
      <Link className={ style.link } to='/'>HOME</Link>
      <div>
        { user ? (
          // Protected Nav Routes
          <> 
            <Link className={ style.link } to='/dashboard'>DASHBOARD</Link>
            <Link className={ style.link } to='/user'>USER</Link>
            <Link className={ style.link } to='/' onClick={() => sign_out()}>SIGN OUT</Link>
          </>
        ) : (
          // Public Nav Routes
          <>
            <Link className={ style.link } to='/sign_in'>SIGN IN</Link>
            <Link className={ style.link } to='/sign_up'>SIGN UP</Link>
          </>
        )}
      </div>
    </nav>

  )
}

export default Navbar