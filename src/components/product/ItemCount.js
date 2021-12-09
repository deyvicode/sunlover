import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    const addition = () => {
        if (count < stock) {
            setCount(count + 1)
        }
    }

    const subtraction = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }

    return (
        <div className="product__container bd-grid">
            <div className="product__gallery">
                <div className="gallery__preview">
                    <img src="https://via.placeholder.com/250x168.jpg?text=sunglass+image" alt="imagen de producto" className="product__img" />
                </div>
                <div className="gallery__list">
                    <img src="https://via.placeholder.com/250x168.jpg?text=Sunglass+images" alt="imagen de producto" className="product__img" />
                    <img src="https://via.placeholder.com/250x168.jpg?text=Sunglass+images" alt="imagen de producto" className="product__img" />
                    <img src="https://via.placeholder.com/250x168.jpg?text=Sunglass+images" alt="imagen de producto" className="product__img" />
                    <img src="https://via.placeholder.com/250x168.jpg?text=Sunglass+images" alt="imagen de producto" className="product__img" />
                </div>
            </div>
            <div className="product__details">
                <h2 className="product__name">Producto Nombre</h2>
                <p className="product__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt vel at ea praesentium? Incidunt suscipit reiciendis dignissimos quidem magni nam modi repudiandae id officia cumque, nulla, facere, blanditiis deserunt libero..</p>
                <p><b>Disponible:</b> {stock}</p>
                
                <div className="product__actions">

                    <div className="product__counter">
                        <button className="button-outline" onClick={ subtraction }> - </button>
                        <span className="counter__input">{ count }</span>
                        <button className="button-outline" onClick={ addition }> + </button>
                    </div>

                    <button className="button" onClick={ onAdd }>Agregar</button>
                </div>
                
            </div>
        </div>
    );
}

export default ItemCount