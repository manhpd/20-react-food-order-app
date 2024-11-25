import { useContext } from "react";
import Modal from "../UI/Modal";
import { CartContext } from "../../store/CartContext";
import { formatCurrency } from "../../utils/currency";
import { UserProgressContext } from "../../store/UserProgressContext";
import CartItem from "./CartItem";


export default function Cart() {
    const cartCtx = useContext(CartContext);
    const userProgress = useContext(UserProgressContext);

    const cartTotals = cartCtx.items.reduce((currentNumber: number, item: any) => {
        return currentNumber + item.price * item.quantity;
    }, 0);

    function handelClose() {
        userProgress.hideCart();
    }


    return (
        <Modal className="cart"  open={userProgress.progress === 'cart'} onClose={handelClose}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item: any) => {
                    return  <CartItem 
                                key={item.id} 
                                {...item} 
                                onIncrease={() => cartCtx.addItem(item)}
                                onDecrease={() => cartCtx.removeItem(item.id)} 
                            />;
                })}
            </ul>
            <p className="cart-total">Total: {formatCurrency(cartTotals, 'en-us','usd')}</p>
            <div className="modal-actions">
                <button className="button" onClick={handelClose}>Close</button>
                {cartCtx.items.length > 0 && (
                    <button className="button" onClick={() => userProgress.showCheckout()}>Go to Checkout</button>
                )}
            </div>
        </Modal>
    );
}