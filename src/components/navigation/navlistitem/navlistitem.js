import React from 'react';

let NavlistItem = (props) => {
    return <li><a onClick={props.closeSideDrawer} href={props.link}>{props.children}</a></li>
}

export default NavlistItem;