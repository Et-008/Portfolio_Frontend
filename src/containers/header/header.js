import React from 'react';
import Navbar from '../../components/navigation/navigation';
import Intro from '../../components/intro/intro';

let Header = (props) => {
    return (
      <header id="Navbar" className="PageHeader">
        <Navbar />
        <Intro />
      </header>
    )
}

export default Header;