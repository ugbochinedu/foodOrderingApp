import React,{Fragment} from "react";
import mealImage from '../../assests/istockphoto-1403973419-612x612.jpg'
import classes from '../Layout/header.module.css'
import HeaderCartButton from "./HeaderCardButton";

const Header = props =>{
    return(
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick ={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="food"/>
            </div>
        </Fragment>
    )
}

export default Header;