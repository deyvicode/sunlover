import { toast } from 'react-toastify'
import { useState } from "react"

const ItemCount = ({ stock, initial, onAdd }) => {
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

    const validateStock = () => {
        if (stock >= count) { // sufficient stock
            onAdd(count)
        } else {
            toast.warning('No tenemos el stock suficiente')
        }
    }

    return (
        <div className="product__actions">
            <div className="product__counter">
                <button className="btn-icon" onClick={ subtraction }> - </button>
                <span className="counter__input">{ count }</span>
                <button className="btn-icon" onClick={ addition }> + </button>
            </div>

            <button className="button" onClick={ validateStock }>Agregar</button>
        </div>
    )
}

export default ItemCount