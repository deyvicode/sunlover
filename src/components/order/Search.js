import { useState } from "react"

const Search = ({ searchOrder }) => {
    const [search, setSearch] = useState('')
    
    const handleInputChange = (event) => setSearch(event.target.value)
    
    const submitSearch = async (event) => {
        event.preventDefault()
        searchOrder(search, event.target)
    }
    
    return (
        <form onSubmit={ submitSearch }>
            <div className="input-group">
                <input type="text" placeholder="Código de compra" onChange={ handleInputChange } required />
                <button className="btn-group" type="submit">
                    <i className='bx bx-search'></i> Buscar
                </button>
            </div>
        </form>
    )
}

export default Search