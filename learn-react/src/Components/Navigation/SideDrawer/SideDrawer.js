import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import BackDrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../auxillery/auxillery'
const sideDrawer = (props) => { 
    let attachedClasses = [classes.SideDrawer,classes.Close]
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    } 
        

    console.log(attachedClasses)
    
    return (
        <Aux>
            <BackDrop show={ props.open} clicked={props.closed }/>
            <div className={attachedClasses.join(' ')}>
            <div className={classes.Logo2 }>
                 <Logo/>
            </div>
            
            <nav>
                <NavigationItems />
            </nav>
            </div>
            </Aux>
    );
}


export default sideDrawer