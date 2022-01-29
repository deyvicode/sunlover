import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../../services/ProductService'

import ItemList from './ItemList'
import Hero from '../header/Hero'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    useEffect(() => {

        setLoading(true)

        if (idCategory === undefined) {
            getProducts().then(products => {
                setProducts(products)
            }).finally(() => setLoading(false))
        } else {
            getProductsByCategory(idCategory).then(products => {
                setProducts(products)
            }).finally(() => setLoading(false))
        }

    }, [idCategory])
    
    return (
        <>
            {
                idCategory === undefined 
                ? <Hero />
                : ''
            }
            
            <section className="featured section" id='products-container'>
                {
                    loading 
                    ? <div className="text-center"><h2>Cargando...</h2></div> 
                    : <ItemList products={ products.filter(product => product.stock > 0) } />
                }
            </section>
        </>
    )
}

export default ItemListContainer