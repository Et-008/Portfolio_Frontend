import React, {useState} from 'react';
import Projects from '../../components/projects/projects';
import Technologies from '../../components/technologies/technologies';
import Images from '../../assets/images/images';

let Main = (props) => {
  let [classes, setClasses] = useState('Project');
  let [btnText, setBtnText] = useState('Show More');
  let ProjectsList = [
    {
      title: "Portfolio Site (React JS)",
      image: Images.portfolio,
      technologies: ["React", "Javascript", "CSS", "Node JS", "Express"],
      githubLink: "https://github.com/Et-008/Portfolio",
      // liveLink: ""
    },
    {
      title: "Burger builder app",
      image: Images.burgerBuilder,
      technologies: ["React", "Firebase", "Javascript", "CodeSandBox", "CSS"],
      githubLink: "https://github.com/Et-008/BurgerBuilder",
      liveLink: "https://97hlm.csb.app"
    },
    {
      title: "NEWS APP (React JS)",
      image: Images.newsReact,
      technologies: ["React", "Javascript", "CSS", "Node JS", "Express"],
      githubLink: "https://github.com/Et-008/News_app",
      liveLink: "https://news--app--react.herokuapp.com",
    },
    {
      title: "Todo List app",
      image: Images.todoList,
      technologies: ["Javascript", "CSS", "Node JS", "Express", "MongoDB-Atlas"],
      githubLink: "https://github.com/Et-008/Treelo",
      liveLink: "https://enigmatic-crag-81088.herokuapp.com"
    },
    {
      title: "Instagram clone",
      image: Images.instacam,
      technologies: ["React", "Firebase", "Javascript", "CodeSandBox", "CSS"],
      githubLink: "https://github.com/Et-008/instagram-clone",
      liveLink: "https://tdgys.csb.app",
    },
    {
      title: "NEWS APP (Vanilla JS)",
      image: Images.newsJs,
      technologies: ["Javascript", "CSS", "Node JS", "Express"],
      githubLink: "https://github.com/Et-008/NEUS-2.0",
      liveLink: "https://news-for-us.herokuapp.com/in"
    },
    {
      title: "GSAP sample (Vanilla JS and GSAP)",
      image: Images.gsap,
      technologies: ["GSAP", "Javascript", "CSS", "Paper.js"],
      githubLink: "https://github.com/Et-008/Gsap-sample",
      // liveLink: ""
    },
  ]

  // let showAllProjects = () => {
  //   if(classes === 'Project') {
  //     setClasses('AllProject');
  //     setBtnText('Show Less')
  //   }
  //   else {
  //     setClasses('Project');
  //     setBtnText('Show More')
  //   }
  // }

  

    return (
        <main className="Maincontent">
        <section id="Projects" className="Projects" >
          <h1 className="SubTitle">Projects</h1>
          <div className={classes}>
            <Projects ProjectsList={ProjectsList}/>
          </div>
          {/* <button onClick={showAllProjects} className="Button">{btnText}</button> */}
        </section>
        <section id="Technologies">
          <h1 className="SubTitle">Technologies</h1>
          <Technologies />
        </section>
        <section id="Contact">
          <h1 className="SubTitle">Contacts</h1>
          <div className="Contact" >
            <div>LinkedIn</div>
            <div>Mail id</div>
            <div>Github</div>
            <div>Twitter</div>
            <div>Freelancer</div>
          </div>
        </section>
      </main>
    )
} 

export default Main;