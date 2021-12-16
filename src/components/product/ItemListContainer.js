import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import productsData from './data'

const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productsData)
        }, 2000) //2s
    })
}

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProducts().then(products => {
            setProducts(products)
        }).finally(() => {
            setLoading(false)
        })
    }, [])
    
    return (
        <section className="featured section">
            {
                loading 
                ? <div className="text-center"><h2>Cargando...</h2></div> 
                : <ItemList products={products} />
            }
        </section>
    )
}

export default ItemListContainer