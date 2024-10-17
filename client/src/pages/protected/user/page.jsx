import { useContext } from 'react'
import UserContext from '../../../context/UserContext'

import style from './style.module.css'

function User() {

  const { user, sign_in, sign_out } = useContext(UserContext)
  const name = `${ user.first_name } ${ user.last_name }`

  return (
    <div className={ style.userGroup }>
      <h2>User Information:</h2>
      <div className={ style.attrGroup}>
        <div className={ style.attrHeading}>Name: </div>
        <div>{ name }</div>
      </div>
      <div className={ style.attrGroup}>
        <div className={ style.attrHeading}>Username:</div> 
        <div>{ user.username }</div>
      </div>
      <div className={ style.attrGroup}>
        <div className={ style.attrHeading}>Email:</div>
        <div>{ user.email }</div>
      </div>
    </div>
  )
}

export default User