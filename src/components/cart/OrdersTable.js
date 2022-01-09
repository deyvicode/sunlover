import { useCartContext } from './CartContext'

const OrdersTable = ({ orders }) => {

    const { removeItem } = useCartContext()

    return (
        <div className="table-container">
            <table className="table-orders">
                <thead>
                    <tr>
                        <th colSpan="2">Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Quitar</th>
                    </tr>
                </thead>
                <tbody>
                    {
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
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="3">Total por pagar : </td>
                        <td> $ { orders.reduce((total, order) => total + order.price * order.quantity, 0).toFixed(2) }</td>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

export default OrdersTable