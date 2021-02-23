import React, { Component } from "react";
import { Route } from 'react-router-dom'

import CheckoutSummery from '../../Components/Order/CheckoutSummery/CheckoutSummery'
import ContactData from './ContactData/ContactData' 
class Checkout extends Component {  
    state = {
        ingredients: {
            salad: 1,
            meat: 1,
            bacon: 1,
            cheese: 2
        },
        totalPrice : null 
    }
    // componentDidMount() { 
    //     const query = new URLSearchParams(this.props.location.search)
    //     const ingredients = {}
    //     let price = null
    //     for (let param of query.entries()) {
    //         ingredients[param[0]] = +param[1];
    //         if (param[0] === 'price') {
    //             price = param[1]
    //         }
    //         else { 
    //             this.setState({ ingredients: ingredients, totalPrice : price})
    //         }
    //     }
        
    // }

    checkoutCanceled = () => {
        this.props.history.goBack()

    }

    checkoutContinued = () => {
        this.props.history.replace('/checkout/contact-data')

    }
    render() { 
        return (
            <div>
                {this.state.ingredients ?
                    <div>
                 <CheckoutSummery
                    checkoutCanceled={ this.checkoutCanceled}
                    checkoutContinued={ this.checkoutContinued}
                    ingredients={this.state.ingredients} />
                <Route
                    path={this.props.match.path + '/contact-data'}
                    render={() => { 
                        <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice} />
                        
                            }}
                        
                        />
                        
                        </div>
                        : null}
                
            </div>
        )
    }
}


export default Checkout;