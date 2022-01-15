import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { getProducts, getProductsByCategory } from '../../services/ProductService'

import { useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { idCategory } = useParams()

    useEffect(() => {

        setLoading(true)

        if (idCategory === undefined) {
            getProducts().then(products => { // delay 0.5s
                setProducts(products)
            }).finally(() => setLoading(false))
        } else {
            getProductsByCategory(idCategory).then(products => { // delay 0.5s
                setProducts(products)
            }).finally(() => setLoading(false))
        }

    }, [idCategory])
    
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