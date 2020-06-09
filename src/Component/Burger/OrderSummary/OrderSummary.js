import React from 'react'
import Aux from '../../../HOC/Aux/Aux'
import Button from '../../UI/Button/Button'

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map((igkey=> {
        return (
                <li key={igkey+'1'}>
                    <span style={{transform:'capitalize'}}>{igkey}</span>: {props.ingredients[igkey]}
                </li>)
    }))
    return(<Aux>
            <h3>YOur Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
            {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
            <p><strong>Total price: {props.price.toFixed(2)}$</strong></p>
            <Button clicked={props.purchaseCancled} btnType={"Danger"}>CANCLE</Button>
            <Button clicked={props.purchaseContinue} btnType={"Success"}>CONTINUE</Button>
      
      </Aux>)
    
    }

export default orderSummary;