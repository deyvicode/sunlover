import { useState, useEffect } from 'react'
import ItemList from './ItemList'
//import productsData from './data'
import { getProducts, getProductsByCategory } from '../../services/ProductService'

import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { category } = useParams()

    useEffect(() => {

        setLoading(true)

        if (category === undefined) {
            getProducts().then(products => {
                setProducts(products)
            }).finally(() => setLoading(false))
        } else {
            getProductsByCategory(category).then(products => {
                setProducts(products)
            }).finally(() => setLoading(false))
        }

    }, [category])
    
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