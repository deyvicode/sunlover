import Navbar from './Navbar'

const Header = () => {
    
    const navbarLinks = [
        {
            name: 'Hombre',
            url: '/category/male'
        },
        {
            name: 'Mujer',
            url: '/category/female'
        },
        {
            name: 'Niños',
            url: '/category/kids'
        },
        {
            name: 'Soporte',
            url: '/support'
        }
    ]

    return (
        <header className="l-header" id="header">
            <Navbar menu={navbarLinks} />
        </header>
    )
}

export default Header