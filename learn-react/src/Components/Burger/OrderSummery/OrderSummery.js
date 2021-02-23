import React, { Component} from 'react'
import Aux from '../../../auxillery/auxillery'
import Button from '../../UI/Button/Button'

class OrderSummery extends Component{

    render(){ const ingredientSummery = Object.keys(this.props.ingredients).map(igKey => { 
        return <li key={ igKey}>
            <span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
        </li>
    })
     return (
        <Aux>
            <h3> Your Order</h3>
            <p> ingredients:</p>
            <ul>
                {ingredientSummery}
            </ul>
            <p style={{ "font-weight": "bold" } }>total price: {this.props.price}</p>
            <p> continue to checkout?</p>
            <Button btnType={"Danger"} clicked={ this.props.purchaseCanceled}>CANCEL</Button>
            <Button btnType={"Success"} clicked={this.props.purchaseContinue }>CONTINUE</Button>
        </Aux>
    )}
   
    
};


export default OrderSummery
