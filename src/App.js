import React, { useState } from 'react';
import './App.css';

function App() {

  let [classes, setClasses] = useState('Project');
  let [btnText, setBtnText] = useState('Show More');
  let Projects = [
    {
      title: "Portfolio Site (React JS)",
      technologies: ["React", "Javascript", "CSS", "Node JS", "Express"],
      githubLink: "https://github.com/Et-008/Portfolio",
      // liveLink: ""
    },
    {
      title: "Instagram clone",
      technologies: ["React", "Firebase", "Javascript", "CodeSandBox", "CSS"],
      githubLink: "https://github.com/Et-008/instagram-clone",
      liveLink: "https://tdgys.csb.app",
    },
    {
      title: "Burger builder app",
      technologies: ["React", "Firebase", "Javascript", "CodeSandBox", "CSS"],
      githubLink: "https://github.com/Et-008/BurgerBuilder",
      liveLink: "https://97hlm.csb.app"
    },
    {
      title: "NEWS APP (React JS)",
      technologies: ["React", "Javascript", "CSS", "Node JS", "Express"],
      githubLink: "https://github.com/Et-008/News_app",
      // liveLink: ""
    },
    {
      title: "NEWS APP (Vanilla JS)",
      technologies: ["Javascript", "CSS", "Node JS", "Express"],
      githubLink: "https://github.com/Et-008/NEUS-2.0",
      liveLink: "https://news-for-us.herokuapp.com/in"
    },
    {
      title: "Todo List app",
      technologies: ["Javascript", "CSS", "Node JS", "Express", "MongoDB-Atlas"],
      githubLink: "https://github.com/Et-008/Treelo",
      liveLink: "https://enigmatic-crag-81088.herokuapp.com"
    },
    {
      title: "GSAP sample (Vanilla JS and GSAP)",
      technologies: ["GSAP", "Javascript", "CSS", "Paper.js"],
      githubLink: "https://github.com/Et-008/Gsap-sample",
      // liveLink: ""
    },
  ]

  let showAllProjects = () => {
    if(classes === 'Project') {
      setClasses('AllProject');
      setBtnText('Show Less')
    }
    else {
      setClasses('Project');
      setBtnText('Show More')
    }
  }

  let ProjectsDisplay = () => {
    return Projects.map(project => {
      console.log(project);
      let techList = project.technologies.map(tech => <li>{tech}</li>);
        return (
          <div className="ProjectDisplayCard">
            <h3>{project.title}</h3>
            <h6>Technologies used:</h6>
              <ul>
                {techList}
              </ul>
              <a className="Button" target="_blank" href={project.liveLink ? project.liveLink : "#"}>Live</a>
              <a className="Button" target="_blank" href={project.githubLink}>Code</a>
          </div>
        )
    })
  }

  return (
    <div className="App">
      <header id="Navbar">
        <nav id="Top" className="Navbar">
          <h1>Arun Elanthamil</h1>
          <ul className="Navlist">
            <li><a href="#Technologies">Technologies</a></li>
            <li><a href="#Projects">Projects</a></li>
            <li><a href="#Contact">Contact</a></li>
          </ul>
        </nav>
        <div className="Intro">
          <h1 className="IntroTitle">Javascript Developer</h1>
          <p className="IntroSubTitle">Specialized in Front-End</p>
          {/* <p>I currently work as a Junior Developer, Full-Time</p> */}
        </div>
      </header>
      <main className="Maincontent">
        <section id="Projects" className="Projects" >
          <h1>Projects</h1>
          <div className={classes}>
            <ProjectsDisplay />
          </div>
          <button onClick={showAllProjects} className="Button">{btnText}</button>
        </section>
        <section id="Technologies">
          <h1>Technologies</h1>
          <div className="Technologies">
            <div>Javascript</div>
            <div>CSS</div>
            <div>JQuery</div>
            <div>React JS</div>
            <div>Redux</div>
            <div>Node JS</div>
            <div>MongoDB</div>
            <div>FireBase</div>
            <div>Git & Github</div>
            <div>HTML</div>
          </div>
        </section>
        <section id="Contact">
          <h1>Contacts</h1>
          <div className="Contact" >
            <div>LinkedIn</div>
            <div>Mail id</div>
            <div>Github</div>
            <div>Twitter</div>
            <div>Freelancer</div>
          </div>
        </section>
      </main>
      <a type="button" className="BackToTop" href="#Top">Top</a>
      {/* <p type="button" className="BackToTop"><a href="#Top">Back to top</a></p> */}
    </div>
  );
}

export default App;
