import React from 'react';

let Project = (props) => {
    let techList = props.Technologies.map((tech, index) => <li key={index}>{tech}</li>);
        return (
            <div className="ProjectCard">
                <div className="ProjectCardBg">
                    <img src={props.Image} />
                </div>
                  <header className="ProjectCardHeader"><h4>{props.Title}</h4></header>
                <div className="ProjectCardContent">
                    <div className="ProjectTechs">
                        <ul>
                        {techList}
                        </ul>
                    </div>
                    <div className="ProjectLinks">
                        {props.LiveLink ? <a className="Button" target="_blank" href={props.LiveLink ? props.LiveLink : "#"}>Live</a> : null}
                        <a className="Button" target="_blank" href={props.GithubLink}>Code</a>
                    </div>
                </div>
            </div>
        )
}

export default Project;