import React from "react";
import { Routes, Route } from "react-router-dom";
import Bio from "../../components/intro/intro";
import Aboutme from "../../components/about-me/about-me";
import "./main.scss";

let Main = (props) => {
  return (
    <Routes>
      <Route exact path="/about" element={<Aboutme />} />
      <Route exact path="/projects" element={<Aboutme />} />
      <Route path="/" element={<Bio />} />
    </Routes>
  );
};

export default Main;
