import { db } from '../firebase'
import { addDoc, collection, doc, getDoc, serverTimestamp } from 'firebase/firestore'
//import { decreaseStock } from './ProductService'
import { getProducts } from './ProductService'

const storeOrder = async (buyer, items) => {
    
    const products = await getProducts()

    let total = 0
    const ItemsValidated = []

    const newItems = items.map(item => {
        total += item.price * item.quantity

        // validate stock
        const product = products.find(product => product.id === item.id)
        const success = product.stock < item.quantity ? false : true
        item.stock = product.stock
        ItemsValidated.push({...item, success})

        return {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: item.quantity,
            frameColor: item.frameColor
        }
    })

    const errors = ItemsValidated.filter(item => !item.success)
    if (errors.length > 0) {
        return {
            success: false,
            message: 'No hay stock suficiente para algunos productos',
            items: ItemsValidated
        }
    }

    const ordersCollection = collection(db, 'orders')
    const response = await addDoc(ordersCollection, {
        date: serverTimestamp(),
        total,
        buyer: {
            email: buyer.email,
            name: buyer.name,
            phone: buyer.phone
        },
        items: newItems
    })

    // decrease stock in firebase
    /*
    itemsValidated.forEach(element => {
        decreaseStock(element.id, element.quantity)
    })
    */

    return {
        success: true,
        id: response.id.trim()
    }
}

const getOrder = async (id) => {
    const ordersCollection = collection(db, 'orders')
    const refDoc = doc(ordersCollection, id)

    const response = await getDoc(refDoc)
    const data = response.data()
    data.id = response.id.trim()
    
    return data
}

export { storeOrder, getOrder }