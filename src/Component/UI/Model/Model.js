import React, {Component} from 'react'
import './Model.css'
import Aux from '../../../HOC/Aux/Aux'
import Backdrop from '../Backdrop/Backdrop'

class Model  extends Component{
    shouldComponentUpdate(nextProps, nextState){
        return nextProps.show !== this.props.show || this.props.children !== nextProps.children;      
    }
    //   here component will not update if next props show property not equals to current props show 
    // componentDidUpdate(){
    //     console.warn("[Model.js] Didupdate")
    // }
    render(){
        return(<Aux>
                <Backdrop show={this.props.show} clicked={this.props.modelClosed} />
                <div className="Modal"
                    style={{transform:this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity:this.props.show ? '1' : '0'}}>
                    {this.props.children}
                </div>
        </Aux>)
    }
}

export default Model;