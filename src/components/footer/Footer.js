import { NavLink } from "react-router-dom"

const Footer = ({ menuLinks }) => {
    return (
        <footer class="footer section">
            <div class="footer__container bd-grid">
                <div class="footer__box">
                    <h3 class="footer__title">SunLover</h3>
                    <p class="footer__description">Summer Collection</p>
                </div>
                
                <div class="footer__box">
                    <h3 class="footer__title">EXPORAR</h3>
                    <ul>
                        {
                            menuLinks.map((element, index) => {
                                return (
                                    <li key={index}>
                                        <NavLink to={element.url} class="footer__link">{element.name}</NavLink>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
        
                <div class="footer__box">
                    <h3 class="footer__title">SOPORTE</h3>
                    <ul>
                        <li><a href="/" class="footer__link">Consulta por productos</a></li>
                        <li><a href="/" class="footer__link">Ayuda en la compra</a></li>
                        <li><a href="/" class="footer__link">Devoluciones y Reclamos</a></li>
                    </ul>
                </div>
        
                <div class="footer__box ">
                    <a href="/" class="footer__social"><i class='bx bxl-facebook'></i></a>
                    <a href="/" class="footer__social"><i class='bx bxl-instagram'></i></a>
                    <a href="/" class="footer__social"><i class='bx bxl-twitter'></i></a>
                    <a href="/" class="footer__social"><i class='bx bxl-google'></i></a>
                </div>
            </div>

            <p class="footer__copy">2021 &#169; <a href="https://www.linkedin.com/in/deyvidelacruz/" target="_blank" rel="noreferrer">Deyvi De La Cruz</a>. All right reserved.</p>
        </footer>
    )
}

export default Footer