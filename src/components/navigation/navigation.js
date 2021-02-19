import React, { useState } from 'react';
import Navlist from './navlist/navlist';
import SideDrawer from './sidedrawer/sidedrawer';
import './navigation.css';

let Navbar = (props) => {
  let [classes, setClasses] = useState('closed')
  let ToggleSidedrawer = () => {
    if (classes === 'closed') {
      setClasses('open');
      return false
    }
    setClasses('closed');
  }
    return (
    <nav id="Top" className="Navbar">
        <h1>Arun Elanthamil</h1>
        <Navlist classes="Navlist" />
        <div onClick={ToggleSidedrawer} className="BurgerButton">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <SideDrawer classes={classes} closeSideDrawer={ToggleSidedrawer} />
    </nav>
  )
}

export default Navbar;
