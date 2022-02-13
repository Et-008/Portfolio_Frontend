import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../components/navigation/navigation";
import Intro from "../../components/intro/intro";
import Links from "../../components/links/links";
import "./header.scss";

let Header = (props) => {
  let heroBottom = 0;

  let [scrollPosition, setScrollPosition] = useState(window.pageYOffset);

  const [crossedHero, setCrossedHero] = useState(false);

  useEffect(() => {
    heroBottom = document
      .getElementById("Navbar")
      .getBoundingClientRect().bottom;
  }, []);

  useEffect(() => {
    if (scrollPosition !== window.pageYOffset) {
      console.log(scrollPosition);
      console.log(window.pageYOffset);
      setScrollPosition(window.pageYOffset);
    }
  });

  return (
    <header
      id="Navbar"
      className={`PageHeader ${crossedHero && `transparent`}`}
    >
      <Navbar />
      {/* <Links Class="HeaderLinks" /> */}
    </header>
  );
};

export default Header;
