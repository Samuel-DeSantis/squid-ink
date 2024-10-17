import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/UserContext'

import style from './nav.module.css'

function Navbar() {

  const { user, sign_in, sign_out } = useContext(UserContext)
  // const showUser = () => console.log(user)

  return (
    <nav className={style.navContainer}>
      <Link className={ style.link } to='/'>HOME</Link>
      <div className={ style.linksContainer}>
        { user ? (
          // Protected Nav Routes
          <> 
            <Link 
              className={ style.link } 
              to='/dashboard'
            >DASHBOARD</Link>
            <Link 
              className={ style.link } 
              to='/user'
            >USER</Link>
            <Link 
              className={ style.link } 
              to='/' 
              onClick={() => sign_out()}
            >SIGN OUT</Link>
          </>
        ) : (
          // Public Nav Routes     
          <> 
            <Link 
              className={ style.link } 
              to='/sign_in'
            >SIGN IN</Link>
            <Link 
              className={ style.link } 
              to='/sign_up'
            >SIGN UP</Link>
          {/* <svg width="3rem" height="3rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 18L20 18" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 12L20 12" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
            <path d="M4 6L20 6" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
          </svg> */}
          </>
        )}
      </div>
      {/* <div className={ style.menu_toggle }>
        <ul>
          <li>

          </li>
        </ul>
      </div> */}
    </nav>

  )
}

export default Navbar