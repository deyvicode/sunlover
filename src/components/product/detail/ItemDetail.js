import { toast } from 'react-toastify'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../cart/CartContext'

import ItemCount from './ItemCount'
import ItemDetailGallery from './ItemDetailGallery'
import ColorPicker from './ColorPicker'

const ItemDetail = ({product, initial}) => {

    const [isShowCount, setIsShowCount] = useState(true)
    const { addItem } = useCartContext()
    const [color, setColor] = useState(() => {
        return product.frameColors ? product.frameColors.default : null
    })

    const onAdd = (count) => {
        const item = {...product, frameColor: color}

        setIsShowCount(false)
        addItem(item, count)

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
                        product.frameColors ? <ColorPicker color={color} setColor={setColor} frameColors={ product.frameColors } /> : ''
                    }                    
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