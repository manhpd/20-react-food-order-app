import React from 'react';
import './Header.css';
import logo from '../../assets/logo.jpg';
export default function Header() {
    return (
        <main id="main-header">

            <h1 id="title">  <img src={logo}></img>
                REACT FOOD</h1>
            <button id="button">Cart</button>
        </main>
    );
}