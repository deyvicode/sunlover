import { useState } from 'react'
import { storeOrder } from '../../services/OrderService'
import { useCartContext } from './CartContext'
import { useNavigate } from 'react-router-dom'

const FormCheckout = ({ items }) => {

    const navigate = useNavigate()
    const { clearCart } = useCartContext()
    const [sending, setSending] = useState(false)
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setBuyer({ ...buyer, [name]: value })
    }

    const submitOrder = async (event) => {
        event.preventDefault()
        setSending(true)

        const idOrder = await storeOrder(buyer, items)
        setSending(false)
        
        if (idOrder) {
            console.log(idOrder);
            setBuyer({
                name: '',
                email: '',
                phone: ''
            })

            clearCart()
            navigate('/order/'+idOrder)
        }
    }

    return (
        <form onSubmit={ submitOrder }>
            <h3>Datos del comprador: </h3>
            <input type="text" name="name" placeholder="Nombres" onChange={ handleInputChange } required />
            <input type="phone" name="phone" placeholder="celular" onChange={ handleInputChange } required />
            <input type="email" name="email" placeholder="email" onChange={ handleInputChange } required />
            <small>Sus datos correctos nos permitirán entregarle los productos de forma correcta y oportuna.</small>
            <button type="submit" className="button" disabled={ sending }>
                { sending ? <i className="bx bx-loader-alt bx-spin"></i> : '' } Terminar Compra
            </button>
        </form>
    )
}

export default FormCheckout