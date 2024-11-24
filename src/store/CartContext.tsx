import { createContext, useReducer } from 'react';

export interface CartItem {
    id: string;
    name: string;
    price: number;
    quantity?: number;
    description: string;
}

export const CartContext = createContext({
    items: [],
    addItem: (item : CartItem) => {},
    removeItem: (id: string) => {}
});

function cartReducer(state: any, action: any) {
    if (action.type === 'ADD') {
        const existingCartItemIndex = state.items.findIndex((item: any) => item.id === action.item.id);
        const updatedItems = [...state.items];
        if (existingCartItemIndex !== -1) {
            const existingCartItem = state.items[existingCartItemIndex];
            const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity + 1
            };
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems.push({...action.item, quantity: 1});
        }

        return {...state, items: updatedItems};
    }

    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item: any) => item.id === action.id);
        const existingItem = state.items[existingCartItemIndex];
        const updatedItems = [...state.items];
        if (existingItem.quantity === 1) {
            updatedItems.splice(existingCartItemIndex, 1);
        } else {
            const updatedItem = {...existingItem, quantity: existingItem.quantity - 1};
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {...state, items: updatedItems};
    }

    return {items: []};
}

export default function CartContextProvider({children}: {children: any}) {
    const [ cart, dispatchCartAction] = useReducer(cartReducer, {items: []});

    function addItem(item: CartItem) {
        dispatchCartAction({type: 'ADD', item: item});
    }

    function removeItem(id: string) {
        dispatchCartAction({type: 'REMOVE', id: id});
    }

    const contextValue = {
        items: cart.items,
        addItem,
        removeItem
    };

    return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
}
