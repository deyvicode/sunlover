import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const productData = {
    id: 5,
    name: 'Maxwell Whiskey Grey',
    description: "Al máximo. Maxwell es nuestra silueta esbelta que aporta todo el estilo. Llévelos a la playa o empáquelos para la fiesta; no importa a dónde los lleve, estos marcos encajan perfectamente.",
    price: 52.50,
    discount: '-10%',
    image: '/img/prod-05.png',
    stock: 10,
    gallery: [
        "https://cdn.shopify.com/s/files/1/0677/4111/products/DIFF714203997_720x.jpg?v=1597431712",
        "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_front_1600x.progressive.jpg?v=1593200132",
        "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_angle_720x.jpg?v=1593200137"
    ]
}

const getProduct = (id) => {

    console.log('simulando que se consulta el producto con id = ' + id)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productData)
        }, 2000) //2s
    })
}

const onAdd = (count, productName) => { // When the product is added to Cart
    toast.success(`agrego ${count} ${productName}`)
}

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getProduct(5).then(productData => {
            setProduct(productData)
        }).finally(() => {
            setLoading(false)
        })
    }, [])

    return (
        <div>
            
            {
                loading
                ? <div className="text-center mt-6"><h2>Cargando...</h2></div>
                : <ItemDetail product={ product } initial={ 1 } onAdd={ onAdd } />
            }

            <ToastContainer theme="dark" position="bottom-right" hideProgressBar closeOnClick pauseOnHover />
        </div>
    )
}

export default ItemDetailContainer