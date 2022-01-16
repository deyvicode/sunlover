import { useCartContext } from './CartContext'

const ItemsTable = ({ items, withRemoveItem }) => {

    const { removeItem } = useCartContext()

    return (
        <div className="table-container">
            <table className="table-orders">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        {
                            withRemoveItem && <th>Eliminar</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map(order => (
                            <tr key={ order.id }>
                                <td className="d-flex">
                                    <img src={ order.image } alt={ order.name } />
                                    { order.name }
                                </td>
                                <td>{ order.quantity }</td>
                                <td> $ { (order.price * order.quantity ).toFixed(2) }</td>
                                {
                                    withRemoveItem && (
                                        <td>
                                            <button className="btn-icon" onClick={ () => removeItem(order.id) }>
                                                <i className="bx bx-trash-alt"></i>
                                            </button>
                                        </td>
                                    )
                                }
                            </tr>
                        ))
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="2">Total : </td>
                        <td> $ { items.reduce((total, order) => total + order.price * order.quantity, 0).toFixed(2) }</td>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

export default ItemsTable