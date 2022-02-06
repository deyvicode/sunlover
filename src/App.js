import './scss/main.scss' // base styles

import CartProvider from './components/cart/CartContext'
import AuthProvider from './context/AuthContext'
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getCategories } from './services/ProductService'
import { sortByName } from './services/Util'

import Header from './components/header/Header'
import ItemListContainer from './components/product/ItemListContainer'
import ItemDetailContainer from './components/product/detail/ItemDetailContainer'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import OrderContaner from './components/order/OrderContainer'

const App = () => {

    const [menuLinks, setMenuLinks] = useState()

    useEffect(() => {
        getCategories().then(categories => {
            const links = categories.map(category => {
                return {
                    name: category.description,
                    url: `/category/${category.key}`
                }
            })

            links.push({
                name: 'Verificar Compra',
                url: '/order'
            })

            setMenuLinks( sortByName(links) )
        })

    }, [])

    return (
        <AuthProvider>
            <CartProvider>
                <BrowserRouter>
                    {
                        menuLinks 
                        ? <Header menuLinks={menuLinks} />
                        : ''
                    }
                    
                    <main className='l-main'>
                        <Routes>
                            <Route path='/' element={<ItemListContainer />} />
                            <Route path='/category/:idCategory' element={<ItemListContainer />} />
                            <Route path='/product/:idProduct' element={<ItemDetailContainer />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='/order' element={<OrderContaner />} />
                            <Route path='/order/:idOrder' element={<OrderContaner />} />
                        </Routes>
                    </main>

                    {
                        menuLinks
                        ? <Footer menuLinks={menuLinks} />
                        : ''
                    }

                    <ToastContainer theme="dark" position="bottom-center" hideProgressBar closeOnClick pauseOnHover />
                </BrowserRouter>
            </CartProvider>
        </AuthProvider>
    );
}

export default App