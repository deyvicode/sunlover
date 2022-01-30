import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOrder } from "../../services/OrderService"
import { formatDate } from '../../services/Util'
import QRCode from 'react-qr-code';

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
                        <h1 className="dark-color-light">¡Gracias por su compra!</h1>
                        <div>Código de compra: <b>{ order.id }</b></div>
                    </div>
                ) : <Search searchOrder={ searchOrder }></Search>
            }


            {
                !notFound ?

                    order ? 
                        <div className="cart-payment mt-2">
                            <ItemsTable items={ order.items } withRemoveItem={false} withStockInfo={false}  />

                            <div className="cart__buyer-form">
                                <p><b>Fecha:</b> { formatDate(order.date.toDate()) }</p> 
                                <p><b>Nombres:</b> { order.buyer.name }</p> 
                                <br />
                                <QRCode value={ `${process.env.REACT_APP_URL}/order/${order.id}` } />
                            </div>
                        </div>
                    : ''

                : <OrderNotFound />
            }

        </div>
    )
}

export default OrderContaner