import { useCartContext } from './CartContext'

import ItemsTable from './ItemsTable'
import EmptyCart from './status/EmptyCart'
import FormCheckout from './FormCheckout'

const Cart = () => {

    const { items } = useCartContext()

    return items.length ? (
        
        <div className="section bd-grid">
            <h2>Va a comprar: </h2><br/>
            <div className="cart-payment">
                <ItemsTable items={ items } withRemoveItem={true} withStockInfo={true} />
                <div className='cart__buyer-form'>
                    <FormCheckout items={ items }  /> 
                </div>
            </div>
        </div>

    ) : <EmptyCart />
}

export default Cart