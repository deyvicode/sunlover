import { useContext, createContext, useState } from "react"

const CartContext = createContext()
const { Provider } = CartContext

export const useCartContext = () => {
    return useContext(CartContext)
}

const CartProvider = ({ children }) => {
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [items, setItems] = useState(() => {
        const localItems = localStorage.getItem("cart")
        if (localItems) {
            const newItems = JSON.parse(localItems)
            
            let newTotalQuantity = 0
            newItems.forEach(element => newTotalQuantity += element.quantity)
            setTotalQuantity(newTotalQuantity)

            return newItems
        }

        return []
    })

    const addItem = (product, quantity) => {
        const newItems = [...items]
        const exist = isInCart(newItems, product.id)
        
        if (exist) {
            const item = findItem(newItems, product.id)
            item.quantity += quantity
        } else {
            const newProduct = {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                quantity
            }

            newItems.push(newProduct)
        }
        
        setItems(newItems)
        setTotalQuantity(totalQuantity + quantity)

        localStorage.setItem('cart', JSON.stringify(newItems))
    }

    const removeItem = (idProduct) => {
        const newItems = [...items]
        
        const item = findItem(newItems, idProduct)
        setTotalQuantity(totalQuantity - item.quantity)
        
        const filtered = newItems.filter(item => item.id !== idProduct)
        setItems(filtered)

        localStorage.setItem('cart', JSON.stringify(filtered))
    }

    const clearCart = () => {
        setTotalQuantity(0)
        setItems([])
        localStorage.removeItem('cart')
    }

    const findItem = (array, id) => array.find(item => item.id === id)

    const isInCart = (array, idProduct) => {
        const item = findItem(array, idProduct)
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