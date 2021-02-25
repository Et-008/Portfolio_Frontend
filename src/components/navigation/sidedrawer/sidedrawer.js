import React from 'react';
import Navlist from '../navlist/navlist';
import Icons from '../../../assets/icons/icons';

let SideDrawer = (props) => {
    return (
        <div className={"SideDrawer " + props.classes}>
            <img onClick={props.closeSideDrawer} src={Icons.back}></img>
            <Navlist classes="SideDrawerList" closeSideDrawer={props.closeSideDrawer} />
        </div>
    )
}

export default SideDrawer;