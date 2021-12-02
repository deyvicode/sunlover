const Navbar = () => {
    return (
        <nav className="nav bd-grid">
            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-menu'></i>
            </div>

            <a href="#home" className="nav__logo">SunLover</a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#home" className="nav__link active">Inicio</a></li>
                    <li className="nav__item"><a href="#male" className="nav__link">Hombre</a></li>
                    <li className="nav__item"><a href="#female" className="nav__link">Mujer</a></li>
                    <li className="nav__item"><a href="#kids" className="nav__link">Niños</a></li>
                </ul>
            </div>

            <div className="nav__shop">
                <i className='bx bx-shopping-bag bx-tada-hover'></i>
            </div>
        </nav>
    )
}

export default Navbar