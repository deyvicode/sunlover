const Navbar = ({ menu }) => {
    return (
        <nav className="nav bd-grid">
            <div className="nav__toggle" id="nav-toggle">
                <i className='bx bx-menu'></i>
            </div>

            <a href="#home" className="nav__logo"><b>SunLover</b></a>

            <div className="nav__menu" id="nav-menu">
                <ul className="nav__list">
                    {
                        menu.map((element, index) => {
                            return (
                                <li className="nav__item" key={index}>
                                    <a href={element.url} className={index === 0 ? "nav__link active" : "nav__link"}>{element.name}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="nav__shop">
                <i className='bx bx-shopping-bag bx-tada-hover'></i>
            </div>
        </nav>
    )
}

export default Navbar