import './scss/main.scss' // base styles

import Header from './components/header/Header'
import ItemListContainer from './components/product/ItemListContainer'
import ItemDetailContainer from './components/product/detail/ItemDetailContainer'
import Footer from './components/footer/Footer'
import Cart from './components/cart/Cart'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartProvider from './components/cart/CartContext'

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
        name: 'Soporte',
        url: '/support'
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
                    </Routes>
                </main>
                <Footer menuLinks={menuLinks} />
            </BrowserRouter>
        </CartProvider>
    );
}

export default App