import React, { useState } from 'react';
import './App.css';
import Header from './containers/header/header';
import Main from './containers/main/main';
import Footer from './containers/footer/footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <a type="button" className="BackToTop" href="#Top">Top</a>
    </div>
  );
}

export default App;
