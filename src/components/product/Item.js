const Item = ({product}) => {
    return (
        <article className="sunglass">
            {
                product.discount ? <div className="sunglass__sale"> {product.discount} </div> : null
            }
            <img src={product.image} alt="imagen de producto" className="sunglass__img" />
            <span className="sunglass__name">{ product.name }</span>
            <span className="sunglass__price">${ product.price.toFixed(2) }</span>
            <a href="#home" className="button-light">Comprar <i className='bx bx-right-arrow-alt button-icon'></i></a>
        </article>
    )
}

export default Item