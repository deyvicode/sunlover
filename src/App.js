import './scss/main.scss' // base styles

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './components/cart/CartContext'

import Header from './components/header/Header'
import ItemListContainer from './components/product/ItemListContainer'
import ItemDetailContainer from './components/product/detail/ItemDetailContainer'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'
import OrderContaner from './components/order/OrderContainer'

const menuLinks = [
    {
        name: 'Hombre',
        url: '/category/male'
    },
    {
        name: 'Mujer',
        url: '/category/female'
    },
    {
        name: 'Niños',
        url: '/category/kids'
    },
    {
        name: 'Verificar Compra',
        url: '/order'
    }
]

const App = () => {
    return (
        <CartProvider>
            <BrowserRouter>
                <Header menuLinks={menuLinks} />
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
                <Footer menuLinks={menuLinks} />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App