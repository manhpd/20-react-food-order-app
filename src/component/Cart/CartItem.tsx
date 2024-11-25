import React from 'react';
import { formatCurrency } from '../../utils/currency';

export default function CartItem({ name, price, quantity, onIncrease, onDecrease }: 
    { name: string, price: number, quantity: number, onIncrease: () => void, onDecrease: () => void }) {
    return (
        <li className="cart-item">
            <p> {name} - {quantity} x {formatCurrency(price)} </p>
            <p className='cart-item-actions'>
                <button onClick={onIncrease}>+</button>
                <span>{quantity}</span>
                <button onClick={onDecrease}>-</button>
            </p>
        </li>
    );
}