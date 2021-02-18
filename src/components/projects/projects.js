import React, { useState } from 'react';

let Projects = (props) => {
  
    return props.ProjectsList.map(project => {
      console.log(project);
      let techList = project.technologies.map(tech => <li>{tech}</li>);
        return (
            <main className="ProjectCard">
                <div className="ProjectCardBg">
                    <img src={project.image} />
                </div>
                  <header className="ProjectCardHeader"><h3>{project.title}</h3></header>
                <div className="ProjectCardContent">
                    <div className="ProjectTechs">
                        <ul>
                        {techList}
                        </ul>
                    </div>
                    <div className="ProjectLinks">
                        {project.liveLink ? <a className="Button" target="_blank" href={project.liveLink ? project.liveLink : "#"}>Live</a> : null}
                        <a className="Button" target="_blank" href={project.githubLink}>Code</a>
                    </div>
                </div>
            </main>
        )
    })
  }

  export default Projects