import React, {Component} from 'react'
import Aux from '../../HOC/Aux/Aux'
import Burger from '../../Component/Burger/Burger'
import BuildControls from '../../Component/Burger/BuildControls/BuildControls'
import Model from '../../Component/UI/Model/Model'
import OrderSummary from '../../Component/Burger/OrderSummary/OrderSummary'

const IngredientPrices = {
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    tomato:0.7,
}

class BurgerBuilder extends Component {
    constructor(props){
        super(props)
        this.state = {
            ingredients:{
                salad:0,
                tomato:0,
                cheese:0,
                meat:0,
        },
        totalPrice:4,
        purchasing:false,
    }
    }
    addIngredient = type => {
        const oldIngredient = this.state.ingredients[type]
        const updatedCount = oldIngredient+1
        const updatedIngredients = {...this.state.ingredients}
        updatedIngredients[type] =updatedCount
        const priceAdditiona = IngredientPrices[type]
        const oldPrice = this.state.totalPrice
        const newPrice = oldPrice+priceAdditiona
        this.setState({ingredients:updatedIngredients,totalPrice:newPrice})
    }

    removeIngredient = type => {
        if (this.state.ingredients[type] <=0){
            return
        }
        else {
            const oldIngredient = this.state.ingredients[type]
            const NewIngredient = {...this.state.ingredients}
            NewIngredient[type] = oldIngredient - 1
            const oldPrice = this.state.totalPrice
            const newPrice = oldPrice - IngredientPrices[type]
            this.setState({ingredients:NewIngredient,totalPrice:newPrice})
        }
    }
    purchaseHandler = () => {
        this.setState({purchasing:true})
    }
    purchaseCancleHandler = () => {
        this.setState({purchasing:false})
    }
    purchaseContinueHandler = () => {
        alert('Continue!')
    }
    render () {
        const disabledInfo = {...this.state.ingredients}
        for (let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0
            
        }
        return (
        <Aux>
            <Model 
                show={this.state.purchasing} 
                modelClosed={this.purchaseCancleHandler}> 
                <OrderSummary ingredients={this.state.ingredients} 
                    purchaseCancled={this.purchaseCancleHandler}
                    purchaseContinue={this.purchaseContinueHandler}
                    price={this.state.totalPrice}
                /> 
            </Model>
            <Burger ingredients={this.state.ingredients}/>
            <BuildControls ingredientAdded={this.addIngredient} 
            ingredientRemoved = {this.removeIngredient}
            disabled = {disabledInfo}
            price = {this.state.totalPrice}
            ordered = {this.purchaseHandler}
            disableOrder = {this.state.totalPrice===4}
            />
        </Aux>
        )
    }
}
export default BurgerBuilder;       