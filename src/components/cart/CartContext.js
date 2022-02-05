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
        const item = findItem(newItems, product.id, product.frameColor)
        
        if (item) {
            item.quantity += quantity
        } else {
            const newProduct = {
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
                stock: product.stock,
                frameColor: product.frameColor,
                success: true,
                quantity
            }
            
            newItems.push(newProduct)
        }
        
        setItems(newItems)
        setTotalQuantity(totalQuantity + quantity)

        localStorage.setItem('cart', JSON.stringify(newItems))
    }

    function addItems(items) {
        setItems(items)
    }

    const removeItem = (idProduct, frameColor) => {
        const newItems = [...items]
        
        const item = findItem(newItems, idProduct, frameColor)
        setTotalQuantity(totalQuantity - item.quantity)
        
        const filtered = newItems.filter(item => item.id !== idProduct || item.frameColor !== frameColor)
        setItems(filtered)

        localStorage.setItem('cart', JSON.stringify(filtered))
    }

    const clearCart = () => {
        setTotalQuantity(0)
        setItems([])
        localStorage.removeItem('cart')
    }

    const findItem = (array, id, frameColor) => {
        return array.find(item => item.id === id && item.frameColor === frameColor)
    }

    return (
        <Provider value={{
            totalQuantity,
            items,
            addItem,
            addItems,
            removeItem,
            clearCart
        }}>
            { children }
        </Provider>
    )
}

export default CartProvider