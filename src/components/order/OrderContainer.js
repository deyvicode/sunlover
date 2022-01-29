import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { getOrder } from "../../services/OrderService"
import { formatDate } from '../../services/Util'
import ItemsTable from "../cart/ItemsTable"
import OrderNotFound from "./status/OrderNotFound"
import Search from "./Search"

const OrderContaner = () => {

    const [order, setOrder] = useState()
    
    const [notFound, setNotFound] = useState(false)
    const { idOrder } = useParams()

    useEffect(() => {
        if (idOrder !== undefined) {
            searchOrder(idOrder)
        }
    }, [idOrder])

    const searchOrder = async (id, target = null) => {
        try {
            const order = await getOrder(id)
            
            setOrder(order)
            setNotFound(false)
            if (target) {
                target.reset()
            }
        } catch (error) {
            setNotFound(true)
        }
    }

    return (
        <div className="section bd-grid">
            
            {
                order ? (
                    <div className="text-center">
                        <h1>¡Gracias por su compra!</h1>
                    </div>
                ) : <Search searchOrder={ searchOrder }></Search>
            }


            {
                !notFound ?

                    order ? (
                        <>
                            <div className="cart-payment mt-2">
                                <ItemsTable items={ order.items } withRemoveItem={false}  />
                                <div className="cart__buyer-form">
                                    <h3> Datos de la compra: </h3> <br />
                                    <p><b>codigo:</b> { order.id }</p>
                                    <p><b>Fecha:</b> { formatDate(order.date.toDate()) }</p> 
                                    <p><b>Nombres:</b> { order.buyer.name }</p> 
                                    <p><b>Celular:</b> { order.buyer.phone }</p> 
                                    <p><b>Email:</b> { order.buyer.email }</p> 
                                </div>
                            </div>
                        </>
                    ) : ''

                : <OrderNotFound />
            }

        </div>
    )
}

export default OrderContaner