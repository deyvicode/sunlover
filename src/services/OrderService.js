import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'

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
    
    const OrdersCollection = collection(db, 'orders')
    const response = await addDoc(OrdersCollection, {
        date: serverTimestamp(),
        total,
        buyer,
        items: itemsValidated  
    })

    console.log(response);
    return response.id
}

export { storeOrder }