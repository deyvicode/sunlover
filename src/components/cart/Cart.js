import { useCartContext } from './CartContext'

const Cart = () => {

    const { orders, removeItem } = useCartContext()

    return (
        <div className="section bd-grid">
            <h2>Va a comprar: </h2><br/>
            <div className="table-container">
                <table className="table-orders">
                    <thead>
                        <tr>
                            <th> - </th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Quitar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length ? 
                            orders.map(order => (
                                <tr key={ order.id }>
                                    <td>
                                        <img src={ order.image } alt={ order.name } />
                                    </td>
                                    <td>{ order.name }</td>
                                    <td>{ order.quantity }</td>
                                    <td> $ { (order.price * order.quantity ).toFixed(2) }</td>
                                    <td>
                                        <button className="btn-icon" onClick={ () => removeItem(order.id) }>
                                            <i className="bx bx-trash-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))
                            : 
                            <tr className="text-center">
                                <td colSpan="4">No hay productos en el carrito</td>
                            </tr>
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Total</td>
                            <td> $ { orders.reduce((total, order) => total + order.price * order.quantity, 0).toFixed(2) }</td>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </div>
    )
}

export default Cart