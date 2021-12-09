import Navbar from './Navbar'

const Header = () => {
    
    const navbarLinks = [
        {
            name: 'Inicio',
            url: '#home'
        },
        {
            name: 'Hombre',
            url: '#male'
        },
        {
            name: 'Mujer',
            url: '#female'
        },
        {
            name: 'Niños',
            url: '#kids'
        }
    ]

    return (
        <header className="l-header" id="header">
            <Navbar menu={navbarLinks} />
        </header>
    )
}

export default Header