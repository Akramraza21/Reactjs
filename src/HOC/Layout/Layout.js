import React, {Component} from 'react'
import Aux from '../Aux/Aux'
import './Layout.css'
import Toolbar from '../../Component/Navigation/Toolbar/Tootbar'
import SideDrawer from '../../Component/Navigation/Toolbar/SideDrawer/SideDrawer'

class Layout extends Component{
    state = {
        showSideDrawer:false
    }
    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer:false})
    }
    sideDrawerToggleHandler = () => {
        let currentState = {...this.state}
        let phase = currentState.showSideDrawer
        this.setState({showSideDrawer:!phase})
    }
    render(){
        return(
            <Aux>
                <Toolbar 
                    drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer 
                    closed={this.sideDrawerClosedHandler} 
                    open={this.state.showSideDrawer}/>
                <main className="content">
                    {this.props.children}
                </main>
            </Aux>
    );
}
}
export default Layout;