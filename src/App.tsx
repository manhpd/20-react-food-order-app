import Cart from "./component/Cart/Cart";
import Header from "./component/Header/Header";
import Meals from "./component/Products/Meals";
import CartContextProvider from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
    return (
        <UserProgressContextProvider>
            <CartContextProvider>
                <Header></Header>
                <Meals></Meals>
                <Cart></Cart>
            </CartContextProvider>
        </UserProgressContextProvider>
        
    );
}

export default App;
