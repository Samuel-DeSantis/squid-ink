import React from 'react'

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
    <div>
      <h2>Dashboard</h2>
      <div>Your Projects</div>
      { projects.map((project, index) => (
        <div key={ index }>
          <div>{ project.name }</div>
          <div>{ project.location }</div>
          <div>{ project.cables }</div>
        </div>
      ))}
      <div></div>
    </div>
  )
}

export default Dashboard