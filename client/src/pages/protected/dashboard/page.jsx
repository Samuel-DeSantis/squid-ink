import React from 'react'
import { Link } from 'react-router-dom'

import style from './style.module.css'

function Dashboard() {

  // TODO: Create DB Project table & fetch user projects

  const projects =[
    {
      name: 'Project 1',
      location: '123st 567',
      cables: 123
    },
    {
      name: 'Project 2',
      location: 'ABCst XYZ7',
      cables: 400
    },
    {
      name: 'Project 3',
      location: 'QRSst 987',
      cables: 250
    },
  ]
  return (
    <div className={ style.dashboardGroup}>
      <h2>Dashboard</h2>
      <div>
        <Link>New Project</Link>
      </div>
      <div>Your Projects</div>
      { projects.map((project, index) => (
        <Link to={'/project/' + index} className={style.projectGroup } key={ index }>
          <div className={ style.attrGroup }>
            <div className={ style.projectHeading }>Name</div>
            <div>{ project.name }</div>
          </div>
          <div className={ style.attrGroup }>
            <div className={ style.projectHeading }>Location</div>
            <div>{ project.location }</div>
          </div>
          <div className={ style.attrGroup }>
            <div className={ style.projectHeading }>Cables</div>
            <div>{ project.cables }</div>
          </div>
        </Link>
      ))}
      <div></div>
    </div>
  )
}

export default Dashboard