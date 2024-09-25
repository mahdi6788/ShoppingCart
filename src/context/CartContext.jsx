import { createContext, useState } from "react";


const initialValues = {
    items: [],
    getProductQuantity: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    deleteFromCart: () => {},
    getTotalAmount: () => {}
}

export const CartContext = createContext(initialValues)

/////

function CartProvider({children}){
    const [cartProducts, setCartProducts] = useState([])

    function getProductQuantity(id){
        const product = cartProducts.find(item => item.id ===id)
        const quantity = product.quantity
        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    function addItemToCart(id){
        
    }

    const contextValues = {
        items: cartProducts,
        getProductQuantity,
        addItemToCart,
        removeItemFromCart,
        deleteFromCart,
        getTotalAmount
    }

    return (
        <CartContext.Provider value={contextValues}> 
            {children} 
        </CartContext.Provider>
    )
}

export default CartProvider