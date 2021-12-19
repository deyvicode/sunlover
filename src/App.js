import './scss/main.scss' // base styles

import Header from './components/header/Header'
import ItemListContainer from './components/product/ItemListContainer'
import ItemDetailContainer from './components/product/detail/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className='l-main'>
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:idCategory' element={<ItemListContainer />} />
                    <Route path='/product/:idProduct' element={<ItemDetailContainer />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App