import { createContext, useState } from "react";
import { getProductData } from "../data/items";


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
        const quantity = product?.quantity
        if (quantity === undefined) {
            return 0
        }
        return quantity
    }

    function addItemToCart(id){
        const quantity = getProductQuantity(id)

        if (quantity === 0){
            setCartProducts([...cartProducts, {id: id, quantity: 1}])
        } else {
            setCartProducts(
                cartProducts.map(product => 
                    product.id === id ? {...product, quantity: product.quantity + 1} : product )
            )
        }
    }

    function deleteFromCart (id){
        setCartProducts((cartProducts) => cartProducts.filter( product => {return product.id !== id}))
    }

    function removeItemFromCart (id) {
        const quantity = getProductQuantity(id)

        if (quantity === 1){
            deleteFromCart(id)
        }
        setCartProducts(
            cartProducts.map( product => product.id === id ? {...product, quantity: product.quantity - 1} : product)
        )
    }

    function getTotalAmount(){
        let totalAmount = 0

        cartProducts.map(product => {
            const productData = getProductData(product.id)

            totalAmount += productData.price * product.quantity
        })

        return totalAmount
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