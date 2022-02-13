import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

let Aboutme = (props) => {
  return (
    <>
      <Helmet>
        <title>Arun Elanthamil | About Me</title>
        <meta
          name="description"
          content="Frontend developer - JS is my game, WebApps, Websites, UI UX design and development."
        />
        <meta
          name="keywords"
          content={("Web developer", "React", "SEO", "optimization")}
        />
        <meta
          property="og:title"
          content="Arun Elanthamil | Frontend Developer"
        />
        <meta
          property="og:description"
          content="Frontend developer - JS is my game, WebApps, Websites, UI UX design and development."
        />
        {/* <meta property="og:image" content={props.ogImage.url} /> */}
        <meta property="og:type" content="website" />
      </Helmet>
      <section className="Bio">
        <h2>Some facts about me</h2>
        <br />
        <p className="Bulletpoints">
          Hello! I am Arun Elanthamil; still not famous, but quite good at web
          design, UI, UX & frontend development. I graduated in Chennai as an
          architect in 2013, however, I soon discovered my passion for web
          design and web technologies. Since then, I have been working on
          different projects and constantly refining my skills. I am still based
          in Chennai, although I enjoy some warm winter weeks every year in my
          home town.
        </p>
        <p className="Bulletpoints">
          I’m a perfectionist, so I don’t deliver the final product to the
          client until I am really proud of it, and I am sure the client will be
          happy too. I enjoy working on new challenging projects, and that way I
          can improve my skills or acquire new ones. For every new project I
          always do some new research; the web is constantly changing, and with
          it the possibilities are also growing. Would you like to discover
          these possibilities with me?{" "}
          <a href="mailto:arunet008@gmail.com">Get in touch.</a>
        </p>
      </section>
    </>
  );
};

export default Aboutme;
