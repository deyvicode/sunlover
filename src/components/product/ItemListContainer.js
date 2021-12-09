import ItemCount from "./ItemCount"

const onAdd = () => { // When the product is added to Cart
    console.log("Product added to cart")
}

const ItemListContainer = () => {
    
    const product = {
        id: 1,
        name: "Product Name",
        stock: 10,
        initial: 1
    }

    return (
        <section className="product">
            <ItemCount stock={ product.stock } initial={ product.initial } onAdd={ onAdd }  />
        </section>
    )
}

export default ItemListContainer