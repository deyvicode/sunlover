import { useContext, createContext, useState } from "react"

const CartContext = createContext()
const { Provider } = CartContext

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [orders, setOrders] = useState([])

    const addItem = (product, quantity) => {
        const exist = isInCart(product.id)
        
        if (exist) {
            const order = findOrder(product.id)
            order.quantity += quantity
        } else {
            const newOrders = [...orders]
            newOrders.push({...product, quantity})

            setOrders(newOrders)
        }

        setTotalQuantity(totalQuantity + quantity)
    }

    const removeItem = (idProduct) => {
        // reduce quantity
        const order = findOrder(idProduct)
        setTotalQuantity(totalQuantity - order.quantity)
        // remove order from orders
        const newOrders = orders.filter(order => order.id !== idProduct)
        setOrders(newOrders)
    }

    // esto no tiene mucho sentido real, pero lo puso para el desafio
    const clear = () => {
        setTotalQuantity(0)
        setOrders([])
    }

    const findOrder = id => orders.find(order => order.id === id)

    const isInCart = (idProduct) => {
        const order = findOrder(idProduct)
        return order ? true : false
    }

    return (
        <Provider value={{
            totalQuantity,
            orders,
            addItem,
            removeItem,
            clear
        }}>
            { children }
        </Provider>
    )
}

export default CartProvider