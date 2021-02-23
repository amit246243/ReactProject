import React, { Component } from 'react'
import Aux from '../../auxillery/auxillery'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal'
import OrderSummery from '../../Components/Burger/OrderSummery/OrderSummery'
import axios from '../../axios-orders'
import Spinner from '../../Components/UI/Spinner/Spinner'

const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

export class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese:0,
            meat:0
        },
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        Loading:false
    }
    componentDidMount() { 
        axios.get('https://react-my-burger-1ee13-default-rtdb.europe-west1.firebasedatabase.app/ingredients.json').then(response => { 
            this.setState({ingredients:response.data})
        })
            
    }
    // ingredients = newIngredients.reduce((arr, el) => { 
    //     return arr.concat(el)
    // },[])

    // if (newngredients.length === 0) { 
        
    // }

    addIngredientHandler = (type) => { 
        let newIngredients = { ...this.state.ingredients };
        newIngredients[type]++;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice
        this.setState({ ingredients: newIngredients, totalPrice: (oldPrice + priceAddition) })
        this.setState({purchasable:true})
    }
    removeIngredientHandler = (type) => { 
        let newIngredients = { ...this.state.ingredients };
        if (newIngredients[type] > 0) {
            newIngredients[type]--;
            const priceDown = INGREDIENT_PRICES[type]; 
            const oldPrice = this.state.totalPrice
            this.setState({ ingredients: newIngredients, totalPrice: (oldPrice - priceDown) })
            console.log(this.state.totalPrice)
            if(oldPrice-priceDown !==4)
                this.setState({ purchasable: true });
             else  
                this.setState({ purchasable: false });
            
            
        }
    }
    purchaseHandler = () => { 
        this.setState({ purchasing: true })  ;
    }

    closeModal = () => { 
        this.setState({purchasing:false})
    }

    purchaseContinue = () => { 

        const queryParams = [];
        for (let i in this.state.ingredients) { 
            queryParams.push(encodeURIComponent(i)+ '=' + encodeURIComponent(this.state.ingredients[i]))
        }
        queryParams.push('price=' + this.state.totalPrice)
        const queryString =queryParams.join('&')
        this.props.history.push({
            pathname: '/checkout',
            search:'?' + queryString
        })
    
        
    }
    render() {
        let orderSummery = null
        if (this.state.Loading) {
            orderSummery = <Spinner />
            
        } else if(this.state.ingredients){ 
            orderSummery=
            <OrderSummery
                price={this.state.totalPrice.toFixed(2)}
                ingredients={this.state.ingredients}
                purchaseCanceled={this.closeModal}
                purchaseContinue={this.purchaseContinue}
            />
        }
        let burger = <Spinner />
        
        if (this.state.ingredients) {
           
            burger = <Aux> <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    purchasable={this.state.purchasable}
                    totalPrice={this.state.totalPrice}
                    addIngredient={this.addIngredientHandler}
                    removeingredient={this.removeIngredientHandler}
                    ordered={this.purchaseHandler} />
        </Aux>
        }
        return (
            <Aux>
                <Modal modalClosed={this.closeModal} show={ this.state.purchasing}>
                    { orderSummery}
                </Modal>
                {burger}
            </Aux>
        )
    }
}

export default BurgerBuilder
