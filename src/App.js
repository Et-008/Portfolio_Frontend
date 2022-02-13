import React, { useState } from "react";
import "./App.scss";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Header from "./containers/header/header";
import Main from "./containers/main/main";
import Links from "./components/links/links";
import Footer from "./containers/footer/footer";

function App(props) {
  return (
    <div className="App">
      <Container>
        <Header />
        <div className="Maincontent">
          <Main />
        </div>
        <Links Class="Links" />
      </Container>
    </div>
  );
}

export default App;
