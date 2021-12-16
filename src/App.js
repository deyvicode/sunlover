import './scss/main.scss' // base styles

import Header from './components/header/Header'
//import ItemListContainer from './components/product/ItemListContainer'
import ItemDetailContainer from './components/product/detail/ItemDetailContainer'

const App = () => {
    return (
        <>
            <Header />
            <main className='l-main'>
                {/* 
                    // comentado temporalmente
                    <ItemListContainer greeting="greeting message" />
                */}
                <ItemDetailContainer />
            </main>
        </>
    );
}

export default App