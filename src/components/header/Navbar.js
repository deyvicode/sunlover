import CartWidget from "./CartWidget"
import { NavLink } from "react-router-dom"

import { useState } from "react"

const Navbar = ({ menuLinks }) => {
    
    const [classMenu, setClassMenu] = useState("nav__menu")

    const toggleMenu = () => {
        const newClass = classMenu === "nav__menu" ? "nav__menu show" : "nav__menu"
        setClassMenu(newClass)
    }
    
    return (
        <nav className="nav bd-grid">
            <div className="nav__toggle" onClick={toggleMenu}>
                <i className='bx bx-menu'></i>
            </div>

            <NavLink to="/" className="nav__logo"><h3>SunLover</h3></NavLink>

            <div className={classMenu}>
                <ul className="nav__list">
                    {
                        menuLinks.map((element, index) => {
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