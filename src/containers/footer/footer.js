import React from 'react';
import Links from '../../components/links/links';
import './footer.scss';

let Header = (props) => {
    return (
      <footer className="PageFooter">
        <p className="FooterNote">
            Thank you!
            <span className="FooterNote2">Contact me if you like</span>
        </p>
        <Links Class="FooterLinks" />
        <p className="Disclaimer"><span>©</span> All rights reserved.</p>
      </footer>
    )
}

export default Header;
