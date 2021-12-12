import Item from './Item'

const itemList = ({ products }) => {
    return (
        <div className="featured__container bd-grid">
            {
                products.map(product => (

                    <Item key={product.id} product={product} />
                
                ))
            }
        </div>
    )
}

export default itemList