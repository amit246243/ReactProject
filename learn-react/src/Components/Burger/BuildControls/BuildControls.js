import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]


const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{ props.totalPrice.toFixed(2)}</strong></p>
        {controls.map(item => { 
            return <BuildControl
                key={item.label}
                label={item.label}
                clickedMore={()=>props.addIngredient(item.type)}
                clickedLess={()=>props.removeingredient(item.type)} />
        })}

        <button
            disabled={!props.purchasable}
            className={classes.OrderButton}
            onClick={props.ordered }>ORDER NOW</button>
    </div>
);



export default buildControls