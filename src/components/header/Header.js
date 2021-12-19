import Navbar from './Navbar'
import { useState, useEffect } from 'react'

const Header = ({ menuLinks }) => {

    const [classHeader, setClassHeader] = useState("l-header")
    
    const controlScroll = () => {
        const newClass = window.scrollY >= 100 ? "l-header scroll-header" : "l-header"
        setClassHeader(newClass)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', controlScroll)
        
        return () => window.removeEventListener('scroll', controlScroll)
    },[])

    return (
        <header className={classHeader}>
            <Navbar menuLinks={menuLinks} />
        </header>
    )
}

export default Header