import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import "./intro.css";

let Bio = (props) => {
  return (
    <>
      <Helmet>
        <title>Arun Elanthamil | Frontend Developer</title>
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
        <h2>
          Creative<span>.</span>Stylish<span>.</span>Functional
        </h2>
        <p className="">Software engineer, in love with interfaces.</p>
        <hr></hr>
        <p className="Sub-text">
          Experimenting with interfaces at{" "}
          <a href="https://superops.ai">Superops</a>. Designing and building
          components using <a href="https://reactjs.org">React JS</a>,{" "}
          <a href="https://www.gatsbyjs.com/docs">Gatsby</a>.
        </p>
      </section>
    </>
  );
};

export default Bio;
