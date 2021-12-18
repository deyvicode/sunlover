import { NavLink } from "react-router-dom"

const Item = ({product}) => {
    return (
        <article className="sunglass">
            {
                product.discount ? <div className="sunglass__sale"> {product.discount} </div> : null
            }
            <img src={product.image} alt="imagen de producto" className="sunglass__img" />
            <span className="sunglass__name">{ product.name }</span>
            <span className="sunglass__price">${ product.price.toFixed(2) }</span>
            <NavLink to={ `/product/${product.id}` } className="button-light">Comprar <i className='bx bx-right-arrow-alt button-icon'></i></NavLink>
        </article>
    )
}

export default Item