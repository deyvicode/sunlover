import { useState } from 'react'


const ItemDetailGallery = ({ images }) => {

    const [imagePreview, setImagePreview] = useState(images[0])
    
    const pushImagePreview = (index) => {
        setImagePreview(images[index])
    }
    
    return (
        <div className="product__gallery">
            <div className="gallery__list">
                {
                    images.map((image, index) => (
                        <img key={index} src={image} alt="imagen de producto" className="product__img" onClick={ () => pushImagePreview(index) } />
                    ))
                }
            </div>
            <div className="gallery__preview">
                <img src={imagePreview} alt="imagen de producto" className="product__img" />
            </div>
        </div>
    )
}

export default ItemDetailGallery