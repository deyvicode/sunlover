import { NavLink } from "react-router-dom"
import { useCartContext } from "../cart/CartContext"


const CartWidget = () => {

    const { totalQuantity } = useCartContext()

    return (
        <div className="nav__shop">
            <NavLink to="/cart">
                <i className='bx bx-shopping-bag bx-tada-hover'></i> { totalQuantity > 0 ? totalQuantity : '' }
            </NavLink>
        </div>
    )
}

export default CartWidget