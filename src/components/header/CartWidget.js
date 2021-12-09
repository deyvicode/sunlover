const foo = () => {
    console.log('Cart clicked');
}

const CartWidget = () => {
    return (
        <div className="nav__shop" onClick={foo}>
            <i className='bx bx-shopping-bag bx-tada-hover'></i>
        </div>
    )
}

export default CartWidget