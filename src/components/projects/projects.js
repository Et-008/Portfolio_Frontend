import React, { useState } from 'react';
import './projects.css';
import ProjectsList from '../../constants/projectList/projectList';
import Project from './project/project';

let Projects = (props) => {
    return ProjectsList.map((project, i) => {
        return (
            <Project key={i} Image={project.image} Title={project.title} LiveLink={project.liveLink} GithubLink={project.githubLink} Technologies={project.technologies} />
        )
    })
}

  export default Projects
  