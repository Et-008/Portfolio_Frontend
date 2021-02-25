import React from 'react';
import Navbar from '../../components/navigation/navigation';
import Intro from '../../components/intro/intro';
import Links from '../../components/links/links';
import './header.css';

let Header = (props) => {
    return (
      <header id="Navbar" className="PageHeader">
        <Navbar />
        <Intro />
        <Links Class="HeaderLinks" />
      </header>
    )
}

export default Header;
