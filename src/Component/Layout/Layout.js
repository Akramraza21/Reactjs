import React from 'react'
import Aux from '../../HOC/Aux'
import style from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>
            Tootbar, SideDrawer, backdrop
        </div>
        <main className="content">
            {props.children}
        </main>
    </Aux>
    );
export default layout;