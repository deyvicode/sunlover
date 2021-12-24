const getProductsData = async () => {
    const response = await fetch('/data/products.json')
    //const response = await fetch('https://mocki.io/v1/5f773065-b2e9-4514-96b3-e4a69d0083cc')
    return await response.json()
}

const getProducts = async () => {
    const products = await getProductsData()

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 500) // 0.5s
    })
}

const getProduct = async (id) => {
    const products = await getProductsData()

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(product => product.id === parseInt(id))
            resolve(product)
        }, 500) // 0.5s
    })
}

const getProductsByCategory = async (category) => {
    const products = await getProductsData()
        
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productsByCategory = products.filter(product => product.category === category)
            resolve(productsByCategory)
        }, 500) // 0.5s
    })
}

export { getProducts, getProduct, getProductsByCategory }