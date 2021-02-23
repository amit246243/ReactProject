import React, {Freagment } from 'react'

import Burger from '../../Burger/Burger'
import Button from '../../UI/Button/Button'
import classes from './CheckoutSummery.css'

const checkoutSummery = (props) => {

    return (
        
        <div className={classes.CheckoutSummery }>
            <h1>we hope it taste well</h1>
            <div style={{ width: '100%', margin: 'auto' }}>
                { console.log(props.ingredients)}
                <Burger ingredients={props.ingredients }/>
                
            </div>
            <Button clicked={props.checkoutCanceled } btnType="Danger">CANCEL</Button>
            <Button clicked={props.checkoutContinued } btnType="Success">Procced</Button>
           
        </div>
         
          
    )

 }



export default checkoutSummery