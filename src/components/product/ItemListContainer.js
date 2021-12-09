import ItemCount from "./ItemCount"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const onAdd = (count) => { // When the product is added to Cart
    toast.success(`agrego ${count} producto(s) a su compra`)
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
            <ToastContainer theme="dark" position="bottom-right" hideProgressBar closeOnClick pauseOnHover />
        </section>
    )
}

export default ItemListContainer