import React, { useState } from 'react';
import Projects from '../../components/projects/projects';
import Technologies from '../../components/technologies/technologies';
import './main.css';

let Main = (props) => {
  return (
      <main className="Maincontent">
      <section id="Technologies" className="Projects">
        <h1 className="SubTitle">TECHNOLOGIES</h1>
        <Technologies />
      </section>
      <section id="Projects" className="Projects" >
        <h1 className="SubTitle">PROJECTS</h1>
        {/* <button className="Button" onClick={() => alert('show prev')}>Prev</button> */}
        <div className="Project">
          <Projects />
          <a target="_blank" className="Button ShowmoreBtn" href="https://github.com/Et-008">Show More</a>
        </div>
        {/* <button className="Button" onClick={() => alert('show next')}>Next</button> */}
      </section>
      <section id="Contact" className="Projects">
        <h1 className="SubTitle">ABOUT ME</h1>
        <div className="Display">
          <p>Hi there! My name is Arun Elanthamil and I’m a Frontend Web Developer.
            I’m based in India and I’m looking for a dev role.</p>

          <p>Passion about problem solving is what got me into code, being able to come up with creative solutions is what makes me stay.</p>

          <p>I enjoy learning as much as I enjoy teaching, I think both are equally fulfilling activities to me, and when I look for a job, continuous learning is a priority.</p>

          <p>I usually spend my days coding something cool or learning new things.
          If I’m not coding, I’ll be at the gym, taking photos or walking the dog.</p>
        </div>
      </section>
      <section id="WCI" className="Projects">
        <h1 className="SubTitle">WHAT  I  CAN  DO? </h1>
        <div>
          <h4>
            1. DESIGN WHAT YOU WANT.
          </h4>
          <p> I love designing websites and keep things as simple as possible. My goals is to focus on minimalism and conveying the message that you want to send.</p>
        </div>
        <div>
          <h4>2. DEVELOP WHAT YOU NEED.</h4>
          <p> I'm a developer, so I know how to create your website to run across devices using the latest technologies available.</p>
        </div>
      </section>
    </main>
  )
} 

export default Main;