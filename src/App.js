import './scss/main.scss' // base styles

import Header from './components/header/Header'
import ItemListContainer from './components/ItemListContainer'

const App = () => {
    return (
        <>
            <Header />
            <main>
                <ItemListContainer greeting="greeting message" />
            </main>
        </>
    );
}

export default App