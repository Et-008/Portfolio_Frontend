import React from 'react';
import NavlistItem from './navlistitem/navlistitem';

let Navlist = (props) => {
    return (
        <ul className={props.classes}>
            <NavlistItem {...props} link="#About">services</NavlistItem>
            <NavlistItem {...props} link="#Projects">projects</NavlistItem>
            <NavlistItem {...props} link="#Technologies">technologies</NavlistItem>
        </ul>
    )
}

export default Navlist;