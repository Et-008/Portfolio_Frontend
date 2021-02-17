import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <nav id="Top" className="Navbar">
          <h3>Arun Elanthamil</h3>
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
        <section id="Projects" >
          <h1>Projects</h1>
          <div className="Projects">
            <div>
              <h3>Portfolio Site (React JS)</h3>
              <h6>Technologies used:</h6>
                <ul>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>Node JS</li>
                  <li>Express</li>
                </ul>
                <button className="Button" disabled><a href="">Live</a></button>
                <button className="Button" disabled><a href="">Code</a></button>
            </div>
            <div>
              <h3>Instagram clone</h3>
              <h6>Technologies used:</h6>
              <ul>
                <li>React</li>
                <li>Firebase</li>
                <li>Javascript</li>
                <li>CodeSandBox</li>
                <li>CSS</li>
              </ul>
                <button className="Button"><a target="_blank" href="https://tdgys.csb.app">Live</a></button>
                <button className="Button"><a target="_blank" href="https://github.com/Et-008/instagram-clone">Code</a></button>
            </div>
            <div>
              <h3>Burger builder app</h3>
              <h6>Technologies used:</h6>
                <ul>
                  <li>React</li>
                  <li>Firebase</li>
                  <li>Javascript</li>
                  <li>CodeSandBox</li>
                  <li>CSS</li>
                </ul>
                <button className="Button"><a target="_blank" href="https://97hlm.csb.app">Live</a></button>
                <button className="Button"><a target="_blank" href="https://github.com/Et-008/BurgerBuilder">Code</a></button>
            </div>
            <div>
              <h3>NEWS APP (React JS)</h3>
              <h6>Technologies used:</h6>
                <ul>
                  <li>React</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>Node JS</li>
                  <li>Express</li>
                </ul>
                <button className="Button" disabled><a target="_blank" href="">Live</a></button>
                <button className="Button"><a target="_blank" href="https://github.com/Et-008/News_app">Code</a></button>
            </div>
            <div>
              <h3>NEWS APP (Vanilla JS)</h3>
              <h6>Technologies used:</h6>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>Node JS</li>
                  <li>Express</li>
                </ul>
                <button className="Button"><a target="_blank" href="https://news-for-us.herokuapp.com/in">Live</a></button>
                <button className="Button"><a target="_blank" href="https://github.com/Et-008/NEUS-2.0">Code</a></button>
            </div>
            <div>
              <h3>Todo List app</h3>
              <h6>Technologies used:</h6>
                <ul>
                  <li>Javascript</li>
                  <li>CSS</li>
                  <li>Node JS</li>
                  <li>Express</li>
                  <li>MongoDB-Atlas</li>
                </ul>
                <button className="Button"><a target="_blank" href="https://enigmatic-crag-81088.herokuapp.com">Live</a></button>
                <button className="Button"><a target="_blank" href="https://github.com/Et-008/Treelo">Code</a></button>
            </div>
            <div>
              <h3>GSAP sample (Vanilla JS and GSAP)</h3>
              <h6>Technologies used:</h6>
                <ul>
                  <li>React</li>
                  <li>Firebase</li>
                  <li>Javascript</li>
                  <li>CSS</li>
                </ul>
                <button className="Button" disabled><a target="_blank" href="">Live</a></button>
                <button className="Button" ><a target="_blank" href="https://github.com/Et-008/Gsap-sample">Code</a></button>
            </div>
          </div>
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
