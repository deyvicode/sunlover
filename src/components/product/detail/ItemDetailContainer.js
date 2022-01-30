import 'react-toastify/dist/ReactToastify.css'
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import ItemDetail from "./ItemDetail"
import { getProduct } from "../../../services/ProductService"


const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { idProduct } = useParams()

    useEffect(() => {
        setLoading(true)

        getProduct(idProduct).then(product => {
            setProduct(product)
        }).finally(() => {
            setLoading(false)
        })
    }, [idProduct])

    return (
        <div>
            {
                loading
                ? <div className="text-center mt-6"><h2>Cargando...</h2></div>
                : (product === undefined) 
                ? <div className="text-center mt-6"><h2>Producto no encontrado</h2></div> 
                : <ItemDetail product={ product } initial={ 1 } />
            }
        </div>
    )
}

export default ItemDetailContainer