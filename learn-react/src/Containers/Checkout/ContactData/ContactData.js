import React, { Component } from 'react'
import Button from '../../../Components/UI/Button/Button'
import classes from './ContactData.css'
import axios from '../../../axios-orders'
class ContactData extends Component { 
    state = {
        name: '',
        email: '',
        adress: {
            street: '',
            postalCode:''
        },
        loading:false
    }



    orderHandler = () => { 
        this.setState({ Loading:true} )
        const order = {
            ingredients: this.state.ingredients,
            price: this.props.price,
            costumer: {
                name:'amit gabbay',
                adress: {
                    street: 'ruhama',
                    zipCode: 5235020,
                    country:'israel'
                },
                email:'amit@amit'
            }
        }
        axios.post('/orders.json', order).then(response => {
            this.setState({ Loading: false });
        }).catch(error => this.setState({ Loading: false}));
        
    }
    render() { 
        return (
            <div className={ classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                <form>
                    <input type="text" className={classes.Input } name="name" placeholder="Your Name"></input>
                    <input type="email" className={classes.Input } name="email" placeholder="Your Mail"></input>
                    <input type="text" className={classes.Input } name="street" placeholder="Your Street"></input>
                    <input type="text" className={classes.Input } name="postal" placeholder="Your Postal Code"></input>
                    <Button clicked={this.orderHandler } btnType = "Success" > ORDER</Button>
                </form>
            </div>
        );
    }
}


export default ContactData