import { useCartContext } from './CartContext'
import StockInfo from './status/StockInfo'

const ItemsTable = ({ items, withRemoveItem, withStockInfo }) => {

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
                        items.map((item, index) => (
                            <tr key={ index }>
                                <td className="d-flex">
                                    <img src={ item.image } alt={ item.name } />
                                    { `${item.name} ${ item.frameColor ? ' - '+item.frameColor : '' }` } 
                                    {
                                        !withStockInfo ? '' 
                                        : <StockInfo success={ item.success } stock={ item.stock } />
                                    }
                                </td>
                                <td>{ item.quantity }</td>
                                <td> $ { (item.price * item.quantity ).toFixed(2) }</td>
                                {
                                    withRemoveItem && (
                                        <td>
                                            <button className="btn-icon" onClick={ () => removeItem(item.id, item.frameColor) }>
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
                        <td> $ { items.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2) }</td>
                    </tr>
                </tfoot>

            </table>
        </div>
    )
}

export default ItemsTable