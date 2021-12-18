import Navbar from './Navbar'

const Header = () => {
    
    const navbarLinks = [
        {
            name: 'Hombre',
            url: '/categoria/hombre'
        },
        {
            name: 'Mujer',
            url: '/categoria/mujer'
        },
        {
            name: 'Niños',
            url: '/categoria/ninos'
        },
        {
            name: 'Soporte',
            url: '/soporte'
        }
    ]

    return (
        <header className="l-header" id="header">
            <Navbar menu={navbarLinks} />
        </header>
    )
}

export default Header