import { db } from '../firebase'
import { getDocs, query, where, collection, doc, getDoc, updateDoc, increment } from 'firebase/firestore'

const getCategoriesData = async (categoriesQuery) => {
    const response = await getDocs(categoriesQuery)
    const docs = response.docs

    const categories = docs.map(doc => setIdToData(doc))

    return categories
}

const getProductsData = async (productsQuery) => {
    const response = await getDocs(productsQuery)
    const docs = response.docs

    const products = docs.map(doc => setIdToData(doc))

    return products
}

const setIdToData = (response) => {
    const data = response.data()
    if (data) {
        data.id = response.id
    }
    
    return data
}

// consumables

const getCategories = async () => {
    const categoriesCollection = collection(db, 'categories')
    return await getCategoriesData(categoriesCollection)
}

const getProducts = async () => {
    const productsCollection = collection(db, 'products')
    return await getProductsData(productsCollection)
}

const getProduct = async (id) => {
    const productsCollection = collection(db, 'products')
    const refDoc = doc(productsCollection, id)

    const response = await getDoc(refDoc)

    return await setIdToData(response)
}

const getProductsByCategory = async (category) => {
    const productsCollection = collection(db, 'products')
    const queryProductsByCategory = query(productsCollection, where('category', '==', category))

    return await getProductsData(queryProductsByCategory)
}

const decreaseStock = async (id, quantity) => {
    const productsCollection = collection(db, 'products')
    const refDoc = doc(productsCollection, id)

    return await updateDoc(refDoc, 'stock', increment(-quantity))
}

export { getCategories, getProducts, getProduct, getProductsByCategory, decreaseStock }