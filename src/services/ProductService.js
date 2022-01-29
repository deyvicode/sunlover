import { db } from '../firebase'
import { getDocs, query, where, collection, doc, getDoc, updateDoc, increment } from 'firebase/firestore'

const getProductsData = async (productsQuery) => {
    const response = await getDocs(productsQuery)
    const docs = response.docs

    const products = docs.map(doc => getProductData(doc))

    return products
}

const getProductData = (response) => {
    const data = response.data()
    data.id = response.id
    
    return data
}

// consumables

const getProducts = async () => {
    const productsCollection = collection(db, 'products')
    return getProductsData(productsCollection)
}

const getProduct = async (id) => {
    const productsCollection = collection(db, 'products')
    const refDoc = doc(productsCollection, id)

    const response = await getDoc(refDoc)

    return getProductData(response)
}

const getProductsByCategory = async (category) => {
    const productsCollection = collection(db, 'products')
    const queryProductsByCategory = query(productsCollection, where('category', '==', category))

    return getProductsData(queryProductsByCategory)
}

const decreaseStock = async (id, quantity) => {
    const productsCollection = collection(db, 'products')
    const refDoc = doc(productsCollection, id)

    const response = await updateDoc(refDoc, 'stock', increment(-quantity))
    
    return response
}

export { getProducts, getProduct, getProductsByCategory, decreaseStock }