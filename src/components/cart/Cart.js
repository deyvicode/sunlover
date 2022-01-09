import OrdersTable from './OrdersTable'
import { useCartContext } from './CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {

    const { orders } = useCartContext()

    return orders.length ? (
        
        <div className="section bd-grid">
            <h2>Va a comprar: </h2><br/>
            <OrdersTable orders={ orders } />
        </div>

    ) : (
        
        <div className="section bd-grid text-center">
            <i className="bx bx-shopping-bag big-icon dark-color-light"></i>
            <h3 className="dark-color-light">¡No tienes productos por comprar!</h3>
            <small className="dark-color-light">Una vez que agregues productos, los veras reflejados acá.</small>
            <div className="mt-6">
                <Link to="/">
                    <button className="button">Ir a comprar</button>
                </Link>
            </div>
        </div>
    )
}

export default Cart