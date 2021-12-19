import './scss/main.scss' // base styles

import Header from './components/header/Header'
import ItemListContainer from './components/product/ItemListContainer'
import ItemDetailContainer from './components/product/detail/ItemDetailContainer'
import Footer from './components/footer/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
        <BrowserRouter>
            <Header menuLinks={menuLinks} />
            <main className='l-main'>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:idCategory' element={<ItemListContainer />} />
                    <Route path='/product/:idProduct' element={<ItemDetailContainer />} />
                </Routes>
            </main>
            <Footer menuLinks={menuLinks} />
        </BrowserRouter>
    );
}

export default App