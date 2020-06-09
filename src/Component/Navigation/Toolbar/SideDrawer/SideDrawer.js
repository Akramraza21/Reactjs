import React from 'react'
import Logo from '../../../Burger/Logo/Logo'
import NavigationItems from '../../NavigationItems/NavigationItems'
import './SideDrawer.css'
import Backdrawer from '../../../UI/Backdrop/Backdrop'
import Aux from '../../../../HOC/Aux/Aux'

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer", "Close"]
    if (props.open){
        attachedClasses = ["SideDrawer", "Open"]
    }
    return (
        <Aux>
            <Backdrawer show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")}>
            <div className={"Logo"}>
                <Logo />
            </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
}
export default sideDrawer;