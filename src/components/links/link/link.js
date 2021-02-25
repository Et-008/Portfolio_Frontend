import React from 'react';
import './link.css'

let Link = (props) => {
    return <li>
                <a className="LinkA" href={props.Href} target="_blank" download={props.Download}>
                    <img className="LinkIcons" src={props.Source} />
                    <span className="LinkName">{props.children}</span>
                </a>
            </li>
}

export default Link;
