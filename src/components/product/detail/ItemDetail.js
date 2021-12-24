import { toast } from 'react-toastify'
import { useState } from 'react'
import { Link } from 'react-router-dom'

import ItemCount from './ItemCount'
import ItemDetailGallery from './ItemDetailGallery'

const ItemDetail = ({product, initial}) => {

    const [countSelected, setCountSelected] = useState(initial)
    const [showCount, setShowCount] = useState(true)

    const onAdd = (count) => {
        setCountSelected(countSelected)
        setShowCount(false)

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
                    
                    {
                        showCount 
                        ? <ItemCount stock={ product.stock } initial={ initial } onAdd={ onAdd } />                    
                        : <div className="product__actions">
                            <Link to="/cart">
                                <button className="button-outline">Finalizar Compra</button>
                            </Link>
                            <Link to="/">
                                <button className="button">Seguir Comprando </button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
}

export default ItemDetail