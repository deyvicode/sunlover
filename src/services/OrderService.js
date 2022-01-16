import { db } from '../firebase'
import { addDoc, collection, doc, getDoc, serverTimestamp } from 'firebase/firestore'
import { decreaseStock } from './ProductService'

const storeOrder = async (buyer, items) => {
    
    let total = 0

    const itemsValidated = items.map(item => {
        
        total += item.price * item.quantity

        return {
            id: item.id,
            name: item.name,
            image: item.image,
            price: item.price,
            quantity: item.quantity
        }
    })

    const ordersCollection = collection(db, 'orders')
    const response = await addDoc(ordersCollection, {
        date: serverTimestamp(),
        total,
        buyer,
        items: itemsValidated
    })

    itemsValidated.forEach(element => {
        decreaseStock(element.id, element.quantity)
    })

    return response.id
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