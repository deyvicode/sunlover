import ItemDetail from "./ItemDetail"
import { getProduct } from "../../../services/ProductService"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState()
    const [loading, setLoading] = useState(true)

    const { idProduct } = useParams()

    useEffect(() => {
        setLoading(true)

        getProduct(idProduct).then(product => { // delay 0.5s
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

            <ToastContainer theme="dark" position="bottom-right" hideProgressBar closeOnClick pauseOnHover />
        </div>
    )
}

export default ItemDetailContainer