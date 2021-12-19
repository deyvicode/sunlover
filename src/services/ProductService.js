const getProductsData = async () => {
    const response = await fetch('/data/products.json')
    //const response = await fetch('https://52c28e64-a429-49d3-8f14-aa876c0cc559.mock.pstmn.io/products')
    return await response.json()
}

const getProducts = async () => {
    const products = await getProductsData()

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000) // 2s
    })
}

const getProduct = async (id) => {
    const products = await getProductsData()

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(product => product.id === parseInt(id))
            resolve(product)
        }, 2000) // 2s
    })
}

const getProductsByCategory = async (category) => {
    const products = await getProductsData()
        
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productsByCategory = products.filter(product => product.category === category)
            resolve(productsByCategory)
        }, 2000) // 2s
    })
}

export { getProducts, getProduct, getProductsByCategory }