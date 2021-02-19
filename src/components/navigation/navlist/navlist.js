import React from 'react';
import NavlistItem from '../navlistitem/navlistitem';

let Navlist = (props) => {
    return (
        <ul className={props.classes}>
            <NavlistItem {...props} link="#Technologies">Technologies</NavlistItem>
            <NavlistItem {...props} link="#Projects">Projects</NavlistItem>
            <NavlistItem {...props} link="#Contact">Contact</NavlistItem>
        </ul>
    )
}

export default Navlist;