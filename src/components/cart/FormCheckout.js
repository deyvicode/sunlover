import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { storeOrder } from '../../services/OrderService'
import { useCartContext } from './CartContext'
import { useAuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify'

const FormCheckout = ({ items }) => {

    const navigate = useNavigate()
    const { clearCart, addItems } = useCartContext()
    const [sending, setSending] = useState(false)
    const [buyer, setBuyer] = useState({
        name: '',
        email: '',
        emailr: '',
        phone: ''
    })

    const { user, loginWithGoogle, loginWithFacebook, logout } = useAuthContext()

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
            await saveOrder(buyer)
        }
    }

    const submitWithAuth = async () => {
        try {
            if (user) {
                setSending(true)
    
                await saveOrder({
                    name: user.displayName,
                    email: user.email,
                    phone: user.providerData[0].phoneNumber
                })
            } else {
                await loginWithGoogle()
            }
        } catch (error) {
            toast.error('Ocurrio un error al enviar el pedido')
        }
    }

    const saveOrder = async (buyerCustom) => {
        const response = await storeOrder(buyerCustom, items)
        setSending(false)
        
        if (response.success) {
            setBuyer({
                name: '',
                email: '',
                emailr: '',
                phone: ''
            })

            toast.info('Guarde su codigo de compra o la imagen QR')

            clearCart()
            navigate('/order/'+response.id)
        } else {
            toast.error(response.message)
            addItems(response.items)
        }
    }

    const handleGoogleSignin = async () => {
        try {
            await loginWithGoogle()
        } catch (error) {
            console.log('error al iniciar sesion', error);
            toast.error('Ocurrio un error al iniciar sesión')
        }
    }

    const handleFacebookSignin = async () => {
        try {
            await loginWithFacebook()
        } catch (error) {
            if (error.message === 'Firebase: Error (auth/account-exists-with-different-credential).') {
                toast.warning('Su cuenta esta asociada con Google')
            } else {
                toast.error('Ocurrio un error al iniciar sesión')
            }
        }
    }

    return (
        <>
            <h3 className="mb-1">Datos del comprador: </h3>
            {
                !user 
                ? (
                    <>
                        <div className="button-group">
                            <button type="button" className="button-login" onClick={ handleGoogleSignin }>
                                <i className="bx bxl-google"></i> Google
                            </button>
                            <button type="button" className="button-login" onClick={ handleFacebookSignin }>
                                <i className="bx bxl-facebook"></i> Facebook
                            </button>
                        </div>
                        <form onSubmit={ submitOrder }>
                            <input type="text" name="name" placeholder="Nombres" onChange={ handleInputChange } required />
                            <input type="phone" name="phone" placeholder="celular" onChange={ handleInputChange } required />
                            <input type="email" name="email" placeholder="correo" onChange={ handleInputChange } required />
                            <input type="email" name="emailr" placeholder="repite el correo" onChange={ handleInputChange } required />
                            <small>Sus datos correctos nos permitirán entregarle los productos de forma correcta y oportuna.</small>
                            <button type="submit" className="button" disabled={ sending }>
                                { sending ? <i className="bx bx-loader-alt bx-spin"></i> : '' } Terminar Compra
                            </button>
                        </form>
                    </>
                ) : (
                    <>
                        <div className="card-user">
                            <img src={ user.providerData[0].photoURL } alt="foto de usuario"></img>
                            <div className="card-user-body">
                                <small className="dark-color-light">{ user.providerData[0].providerId }</small>
                                <p>{ user.displayName }</p>
                                <p>{ user.email }</p>
                                <button type="button" onClick={logout}>Cerrar Sesion</button>
                            </div>
                        </div>
                        <button type="button" className="button-fw" disabled={ sending } onClick={ submitWithAuth }>
                            { sending ? <i className="bx bx-loader-alt bx-spin"></i> : '' } Terminar Compra
                        </button>
                    </>
                )
            }
        </>
    )
}

export default FormCheckout