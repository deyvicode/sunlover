import { useState } from "react"

const ItemListContainer = ({ greeting }) => {
    
    const [contador, setContador] = useState(0)

    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    const resetear = () => {
        setContador(0)
    }
    
    return (
        <div className="hero">
            <h1>{ greeting }</h1>

            <div>
                <p>{ contador }</p>
                <button onClick={ sumar }>Sumar</button>
                <button onClick={ restar }>Restar</button>
                <button onClick={ resetear }>Resetear</button>
            </div>
            
        </div>
    )
}

export default ItemListContainer