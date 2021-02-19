import React from 'react';
import Navlist from '../navlist/navlist';
import Images from '../../../assets/images/images'

let SideDrawer = (props) => {
    return (
        <div className={"SideDrawer " + props.classes}>
            <img onClick={props.closeSideDrawer} src={Images.back}></img>
            <Navlist classes="SideDrawerList" closeSideDrawer={props.closeSideDrawer} />
        </div>
    )
}

export default SideDrawer;