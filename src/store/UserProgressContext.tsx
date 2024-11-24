import { createContext, useState } from 'react';

export const UserProgressContext = createContext({
    progress: '',
    showCart: () => {},
    hideCart: () => {},
    showCheckout: () => {},
    hideCheckout: () => {}
});

export function UserProgressContextProvider({children}: {children: any}) {
    const [progress, setProgress] = useState('');

    function showCart() {
        setProgress('cart');
    }

    function hideCart() {
        setProgress('');
    }

    function showCheckout() {
        setProgress('checkout');
    }

    function hideCheckout() {
        setProgress('');
    }

    const context = {
        progress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout
    };

    return (
        <UserProgressContext.Provider value={context}>
            {children}
        </UserProgressContext.Provider>
    );
}