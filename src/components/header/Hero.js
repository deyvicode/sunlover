const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container bd-grid">
                <div className="hero__sunglass">
                    <img src="/img/img-main.png" alt="sunglass" className="hero__img" />
                </div>
                <div className="hero__data">
                    <span className="hero__new">Summer 2022</span>
                    <h1 className="hero__title">
                        GAFAS DE SOL <br /> 
                        PARA TODO EL MUNDO
                    </h1>
                    <p className="hero__description">Explora nuestra nueva colección para este verano.</p>
                    <a href="#products-container" className="button">Explorar</a>
                </div>
            </div>
        </section>
    )
}

export default Hero