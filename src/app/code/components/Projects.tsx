import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div className='flex flex-col md:flex-row md:flex-wrap justify-between items-center'>
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}

export default Projects
