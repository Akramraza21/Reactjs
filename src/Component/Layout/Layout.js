import React from 'react'
import Aux from '../../HOC/Aux'
import style from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Tootbar'

const layout = (props) => (
    <Aux>
        <Toolbar />
        <main className="content">
            {props.children}
        </main>
    </Aux>
    );
export default layout;