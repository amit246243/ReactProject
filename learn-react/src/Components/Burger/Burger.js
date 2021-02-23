import { object } from 'prop-types'
import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/burgerIngredients';



const burger = (props) => { 
    let ingredients = Object.keys(props.ingredients).map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => { 
            return <BurgerIngredients key={igKey + i} type={ igKey}/>
        })

    });
    
    // let sum = 0
    // ingredients.map(item => {
    //     return sum += item.length
    // })
    // if (sum === 0) { 
    //     alert("please add items")
    // }
    
    ingredients = ingredients.reduce((arr, el) => { 
        return arr.concat(el)
    },[])

    if (ingredients.length === 0) { 
        ingredients = <p>please start adding ingredients</p>
    }
    
    
    
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type={ "bread-top"}/>
            {ingredients}
            <BurgerIngredients type={"bread-bottom"}/>
        </div>
    );
}

export default burger;