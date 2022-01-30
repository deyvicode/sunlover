const StockInfo = ({success, stock}) => {
    return success ? '' 
    : <span className="text-danger">
        { stock > 0 ? `(disponible ${stock})`: '(agotado)' }
    </span>
}

export default StockInfo