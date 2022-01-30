import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { storeOrder } from '../../services/OrderService'
import { useCartContext } from './CartContext'
import { toast } from 'react-toastify'

const FormCheckout = ({ items }) => {

    const navigate = useNavigate()
    const { clearCart } = useCartContext()
    const [sending, setSending] = useState(false)
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        emailr: '',
        phone: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setBuyer({ ...buyer, [name]: value })
    }

    const submitOrder = async (event) => {
        event.preventDefault()
        setSending(true)

        if (buyer.email !== buyer.emailr) {
            toast.warning('Los correos no coinciden')
            setSending(false)
            
            return false
        } else {
            const idOrder = await storeOrder(buyer, items)
            setSending(false)
            
            if (idOrder) {
                setBuyer({
                    name: '',
                    email: '',
                    emailr: '',
                    phone: ''
                })

                toast.info('Guarde su codigo de compra o la imagen QR')
    
                clearCart()
                navigate('/order/'+idOrder)
            }
        }
    }

    return (
        <form onSubmit={ submitOrder }>
            <h3>Datos del comprador: </h3>
            <input type="text" name="name" placeholder="Nombres" onChange={ handleInputChange } required />
            <input type="phone" name="phone" placeholder="celular" onChange={ handleInputChange } required />
            <input type="email" name="email" placeholder="correo" onChange={ handleInputChange } required />
            <input type="email" name="emailr" placeholder="repite el correo" onChange={ handleInputChange } required />
            <small>Sus datos correctos nos permitirán entregarle los productos de forma correcta y oportuna.</small>
            <button type="submit" className="button" disabled={ sending }>
                { sending ? <i className="bx bx-loader-alt bx-spin"></i> : '' } Terminar Compra
            </button>
        </form>
    )
}

export default FormCheckout