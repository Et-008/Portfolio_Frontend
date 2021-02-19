import React from 'react';
import Navbar from '../../components/navigation/navigation';
import Intro from '../../components/intro/intro';

let Header = (props) => {
    return (
      <header id="Navbar" className="PageHeader">
        <Navbar />
        <div>
          <ul>
            <li>Send Mail</li>
            <li>Github</li>
            <li>Twitter</li>
          </ul>
        </div>
        <Intro />
      </header>
    )
}

export default Header;