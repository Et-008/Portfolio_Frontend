import React from 'react';
import Icons from '../../assets/icons/icons';
import Document from '../../assets/documents/Arun(latest).pdf';
import Link from './link/link';

let Links = (props) => {
    return (
          <ul className={props.Class}>
            <Link Href={"mailto:arunet008@gmail.com?subject=Job%20oppurtunity&body=Hi%20Arun,%0D%0A%0D%0AI saw ur portfolio and would like to discuss about an oppurtunity with you.%0D%0A%0D%0Athanks and regards,%0D%0A"} Source={Icons.mail}></Link>
            <Link Href={"https://github.com/Et-008"} Source={Icons.github}></Link>
            <Link Href={"https://twitter.com/et_arun?s=09"} Source={Icons.twitter}></Link>
            <Link Href={Document} Source={Icons.document}></Link>
            {/* <li><a href={Document} className="LinkA"><img className="LinkIcons" src={Icons.mail} />Email</a></li>
            <li><a target="_blank" href="https://github.com/Et-008" className="LinkA"><img className="LinkIcons" src={Icons.github} />Github</a></li>
            <li><a target="_blank" href="https://twitter.com/et_arun?s=09" className="LinkA"><img className="LinkIcons" src={Icons.twitter} />Twitter</a></li>
            <li><a href={Document} download className="LinkA"><img className="LinkIcons" src={Icons.document} />Resume</a></li> */}
          </ul>
    )
}

export default Links;
