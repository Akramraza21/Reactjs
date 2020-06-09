import React from 'react'
import './DrawerToggle.css'

const drawerToggel = (props) => (
    <div onClick={props.clicked} className={"DrawerToggle"}>
        <div></div>
        <div></div>
        <div></div>
    </div>
)
export default drawerToggel;