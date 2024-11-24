import { useContext } from "react";
import { formatCurrency } from "../../utils/currency";
import { CartContext } from "../../store/CartContext";

export default function Meal({meal}: {meal: any}) {

    const cartCtx = useContext(CartContext);

    function handelAddToCart() {
        cartCtx.addItem({
            id: meal.id,
            name: meal.name,
            price: meal.price,
            description: meal.description
        });
    }
    return (
        <li className="meal-item">
            <div>
                <img src={`http://localhost:3000/${meal.image}`}></img>
                <h3>{meal.name}</h3>
                <div className="meal-item-price">{formatCurrency(meal.price,'en-us','usd')}</div>
                <div className="article meal-item-description">{meal.description}</div>
                
            </div>
            <div className="meal-item-actions">
                <button className="button" onClick={handelAddToCart}>Add To Cart</button>
            </div>
        </li>
    );
}