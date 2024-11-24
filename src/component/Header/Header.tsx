import React, { useContext } from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';
import { CartContext } from '../../store/CartContext';
import { UserProgressContext } from '../../store/UserProgressContext';
export default function Header() {

    const cartCtx = useContext(CartContext);
    const userProgress = useContext(UserProgressContext);

    const totalItems = cartCtx.items.reduce((currentNumber: number, item: any) => {
        return currentNumber + item.quantity;
    }, 0);
    
    function handleCartClick() {
        userProgress.showCart();
    }
    
    return (
        <header id="main-header">
            <h1 id="title">  <img src={logo}></img>
                REACT FOOD</h1>
            <button id="button" onClick={handleCartClick}>Cart ({totalItems})</button>
        </header>
    );
}