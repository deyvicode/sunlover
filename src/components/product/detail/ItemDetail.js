import { toast } from 'react-toastify'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import ItemCount from './ItemCount'
import ItemDetailGallery from './ItemDetailGallery'
import { useCartContext } from '../../cart/CartContext'

const ItemDetail = ({product, initial}) => {

    const [isShowCount, setIsShowCount] = useState(true)
    const { addItem } = useCartContext()

    const onAdd = (count) => {
        setIsShowCount(false)
        addItem(product, count)

        toast.success(`agrego ${count} ${product.name}`)
    }

    return (
        <section className="product">
            <div className="product__container bd-grid">
                
                <ItemDetailGallery images={ product.gallery } />

                <div className="product__details">
                    <h2 className="product__name">{ product.name }</h2>
                    <p className="product__description">{ product.description }</p>
                    <p><b>Disponible:</b> { product.stock }</p>
                    <p><b>Precio:</b> ${ product.price.toFixed(2) }</p>
                    
                    {
                        isShowCount 
                        ? <ItemCount stock={ product.stock } initial={ initial } onAdd={ onAdd } />                    
                        : (
                            <div className="product__post-links">
                                <Link to="/cart">
                                    <button className="button-outline">Terminar mi compra</button>
                                </Link>
                                <Link to="/">
                                    <button className="button">Seguir comprando </button>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default ItemDetail