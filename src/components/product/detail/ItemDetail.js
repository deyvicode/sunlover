import { useState } from 'react'
import { toast } from 'react-toastify'

const ItemDetail = ({product, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const addition = () => {
        if (count < product.stock) {
            setCount(count + 1)
        }
    }

    const subtraction = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    const validateStock = () => {
        if (product.stock >= count) { // sufficient stock
            onAdd(count, product.name)
        } else {
            toast.warning('No tenemos el stock suficiente')
        }
    }

    return (
        <section className="product">
            <div className="product__container bd-grid">
                <div className="product__gallery">
                    <div className="gallery__list">
                        {
                            product.gallery.map((image, index) => (
                                <img key={index} src={image} alt="imagen de producto" className="product__img" />
                            ))
                        }
                    </div>
                    <div className="gallery__preview">
                        <img src={product.gallery[0]} alt="imagen de producto" className="product__img" />
                    </div>
                </div>
                <div className="product__details">
                    <h2 className="product__name">{ product.name }</h2>
                    <p className="product__description">{ product.description }</p>
                    <p><b>Disponible:</b> {product.stock}</p>
                    
                    <div className="product__actions">

                        <div className="product__counter">
                            <button className="button-outline" onClick={ subtraction }> - </button>
                            <span className="counter__input">{ count }</span>
                            <button className="button-outline" onClick={ addition }> + </button>
                        </div>

                        <button className="button" onClick={ validateStock }>Agregar</button>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default ItemDetail