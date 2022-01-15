import { useContext, createContext, useState } from "react"

const CartContext = createContext()
const { Provider } = CartContext

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [items, setItems] = useState([])

    const addItem = (product, quantity) => {
        const exist = isInCart(product.id)
        
        if (exist) {
            const item = findItem(product.id)
            item.quantity += quantity
        } else {
            const newItems = [...items]
            newItems.push({...product, quantity})

            setItems(newItems)
        }

        setTotalQuantity(totalQuantity + quantity)
    }

    const removeItem = (idProduct) => {
        // reduce quantity
        const item = findItem(idProduct)
        setTotalQuantity(totalQuantity - item.quantity)
        // remove item from items
        const newItems = items.filter(item => item.id !== idProduct)
        setItems(newItems)
    }

    const clearCart = () => {
        setTotalQuantity(0)
        setItems([])
    }

    const findItem = id => items.find(item => item.id === id)

    const isInCart = (idProduct) => {
        const item = findItem(idProduct)
        return item ? true : false
    }

    return (
        <Provider value={{
            totalQuantity,
            items,
            addItem,
            removeItem,
            clearCart
        }}>
            { children }
        </Provider>
    )
}

export default CartProvider