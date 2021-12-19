import Navbar from './Navbar'
import { useState, useEffect } from 'react'

const Header = () => {

    const [classHeader, setClassHeader] = useState("l-header")
    
    const controlScroll = () => {
        const newClass = window.scrollY >= 100 ? "l-header scroll-header" : "l-header"
        setClassHeader(newClass)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', controlScroll)
        
        return () => window.removeEventListener('scroll', controlScroll)
    },[])

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
        <header className={classHeader}>
            <Navbar menu={navbarLinks} />
        </header>
    )
}

export default Header