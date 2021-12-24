import { NavLink } from "react-router-dom"

const CartWidget = () => {
    return (
        <div className="nav__shop">
            <NavLink to="/cart">
                <i className='bx bx-shopping-bag bx-tada-hover'></i>
            </NavLink>
        </div>
    )
}

export default CartWidget