import React from 'react'
import { useParams } from 'react-router-dom'

function Project() {

  const project = useParams()

  return (
    <div>Project {project.id}</div>
  )
}

export default Project