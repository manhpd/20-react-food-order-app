import { useContext } from "react";
import Modal from "../UI/Modal";
import { CartContext } from "../../store/CartContext";
import { formatCurrency } from "../../utils/currency";
import { UserProgressContext } from "../../store/UserProgressContext";


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
        <Modal className="cart"  open={userProgress.progress === 'cart'}>
            <h2>Your Cart</h2>
            <ul>
                {cartCtx.items.map((item: any) => {
                    return <li key={item.id}>{item.name} ({item.quantity})</li>
                })}
            </ul>
            <p className="total">Total: {formatCurrency(cartTotals, 'en-us','usd')}</p>
            <div className="actions">
                <button className="button--alt" onClick={handelClose}>Close</button>
                <button className="button">Go to Checkout</button>
            </div>
        </Modal>
    );
}