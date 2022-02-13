import React, { useState, useEffect } from "react";
import CustomLink from "../utils/custom-links";
// import {} from ' '
import Navlist from "./navlist/navlist";
import SideDrawer from "./sidedrawer/sidedrawer";
import Images from "../../assets/images/images";
import "./navigation.css";

let Navbar = (props) => {
  let [classes, setClasses] = useState("closed");

  let ToggleSidedrawer = () => {
    if (classes === "closed") {
      setClasses("open");
      return false;
    }
    setClasses("closed");
  };

  return (
    <nav id="Top" className="Navbar">
      <CustomLink
        to="projects"
        children={(match) => {
          return <p>{`${!match ? "< " : ""} WHAT I DO `}</p>;
        }}
      />
      <hr />
      <CustomLink
        to="/"
        children={(match) => {

          console.log(match)
          return <div className={`Home-route ${!match ? "open" : "close"} ${match?.pathname === "/about" ? "right" : match?.pathname === "/about" ? "left" : null}`}><p>{"/"}</p><hr /></div>
        }}
      />
      <CustomLink
        to="about"
        children={(match) => {
          return <p>{`WHO I AM ${!match ? "/>" : ""}`}</p>;
        }}
      />
      {/* <Navlist classes="Navlist" /> */}
      {/* <div onClick={ToggleSidedrawer} className="BurgerButton">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <SideDrawer classes={classes} closeSideDrawer={ToggleSidedrawer} /> */}
    </nav>
  );
};

export default Navbar;
