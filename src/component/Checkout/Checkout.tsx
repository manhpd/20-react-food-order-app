import { useContext } from "react";
import Modal from "../UI/Modal";
import { CartContext } from "../../store/CartContext";
import { UserProgressContext } from "../../store/UserProgressContext";
import { formatCurrency } from "../../utils/currency";
import Input from "../UI/Input";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgress = useContext(UserProgressContext);
    
    const cartTotals = cartCtx.items.reduce((currentNumber: number, item: any) => {
        return currentNumber + item.price * item.quantity;
    }, 0);

    return (
        <Modal open={userProgress.progress === 'checkout'} onClose={() =>userProgress.hideCheckout()}>
            <form>
                <h2>Checkout</h2>
                <form>
                    Total Amout: {formatCurrency(cartTotals)}
                    <Input label="Name" id="name" type="text" />
                    <Input label="Email" id="email" type="email" />
                    <Input label="Street" id="street" type="text" />
                    <div className="control-row">
                        <Input label="City" id="city" type="text" />
                        <Input label="Postal Code" id="postal" type="text" />

                    </div>
                    <p className="modal-actions">
                        <button type="button" className="button" onClick={()=>userProgress.hideCheckout}>Close</button>
                        <button type="submit" className="button">Submit</button>
                    </p>
                </form>
            </form>
        </Modal>
    );
}