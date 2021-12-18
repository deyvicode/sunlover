import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"


const Navbar = ({ menu }) => {
    return (
        <nav className="nav bd-grid">
            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-menu'></i>
            </div>

            <NavLink to="/" className="nav__logo"><b>SunLover</b></NavLink>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    {
                        menu.map((element, index) => {
                            return (
                                <li className="nav__item" key={index}>
                                    <NavLink to={element.url} className="nav__link">{element.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <CartWidget />
        </nav>
    )
}

export default Navbar