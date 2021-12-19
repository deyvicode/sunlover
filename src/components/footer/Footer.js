import { NavLink } from "react-router-dom"

const Footer = ({ menuLinks }) => {
    return (
        <footer className="footer section">
            <div className="footer__container bd-grid">
                <div className="footer__box">
                    <h3 className="footer__title">SunLover</h3>
                    <p className="footer__description">Summer Collection</p>
                </div>
                
                <div className="footer__box">
                    <h3 className="footer__title">EXPORAR</h3>
                    <ul>
                        {
                            menuLinks.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={element.url} className="footer__link">{element.name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
        
                <div className="footer__box">
                    <h3 className="footer__title">SOPORTE</h3>
                    <ul>
                        <li><a href="/" className="footer__link">Consulta por productos</a></li>
                        <li><a href="/" className="footer__link">Ayuda en la compra</a></li>
                        <li><a href="/" className="footer__link">Devoluciones y Reclamos</a></li>
                    </ul>
                </div>
        
                <div className="footer__box ">
                    <a href="/" className="footer__social"><i className='bx bxl-facebook'></i></a>
                    <a href="/" className="footer__social"><i className='bx bxl-instagram'></i></a>
                    <a href="/" className="footer__social"><i className='bx bxl-twitter'></i></a>
                    <a href="/" className="footer__social"><i className='bx bxl-google'></i></a>
                </div>
            </div>

            <p className="footer__copy">2021 &#169; <a href="https://www.linkedin.com/in/deyvidelacruz/" target="_blank" rel="noreferrer">Deyvi De La Cruz</a>. All right reserved.</p>
        </footer>
    )
}

export default Footer