import React, {Component} from 'react'
import Aux from '../Aux/Aux'
import Model from '../../Component/UI/Model/Model'

const withErrorHandling = (WrappedComponent,axios) => {
    return class extends Component {
            state = {
                error:null
            }
        componentDidMount (){
            axios.interceptors.request.use(req => this.setState({error:null}))
            axios.interceptors.response.
            use(response=> response,error=>this.setState({error:error}))
        }
        errorHandlerClear = () => {
            this.setState({error:null})
        }
        render () {
            return (
                <Aux >
                <Model modelClosed={this.errorHandlerClear}
                show={this.state.error}>
                    {
                        this.state.error ? this.state.error.message :null
                    }
                </Model>
                <WrappedComponent {...this.props}/>
                </Aux>
            )
        }
    }
}
export default withErrorHandling;