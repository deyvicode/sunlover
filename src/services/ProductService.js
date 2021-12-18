const products = [
    {
        id: 1,
        name: 'Ravenclaw SMBTB',
        price: 59.50,
        description: "Wise Ravenclaws™, show your house loyalty with these sunglasses featuring clip-on twilight blue lenses, temples in the shape of Luna Lovegood's wand, and the house name & symbol on the temple tips.",
        discount: '-30%',
        image: '/img/prod-01.png',
        category: 'male',
        stock: 10,
        gallery: [
            "https://cdn.shopify.com/s/files/1/0677/4111/products/DIFF714203997_720x.jpg?v=1597431712",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_front_1600x.progressive.jpg?v=1593200132",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_angle_720x.jpg?v=1593200137"
        ]
    },
    {
        id: 2,
        name: 'Billie Black Grey',
        description: "All angles. Meet Billie, your new squared-off style staple. From front to back and side to side, these frames are an all-around favorite.",
        price: 80.00,
        discount: null,
        image: '/img/prod-02.png',
        category: 'kids',
        stock: 10,
        gallery: [
            "https://cdn.shopify.com/s/files/1/0677/4111/products/DIFF714203997_720x.jpg?v=1597431712",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_front_1600x.progressive.jpg?v=1593200132",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_angle_720x.jpg?v=1593200137"
        ]
    },
    {
        id: 3,
        name: 'Cruz Gold G15',
        description: "The aviator. Our aviator. The Cruz is your must have style staple. With its classic shape, this is made for any occasion and compliments any face. Premium mineral glass lenses elevate this every day frame.",
        price: 50.00,
        discount: null,
        image: '/img/prod-03.png',
        category: 'kids',
        stock: 10,
        gallery: [
            "https://cdn.shopify.com/s/files/1/0677/4111/products/DIFF714203997_720x.jpg?v=1597431712",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_front_1600x.progressive.jpg?v=1593200132",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_angle_720x.jpg?v=1593200137"
        ]
    },
    {
        id: 4,
        name: 'Camden Midnight Marble Grey',
        description: "A classic, spruced up. Camden is a standout in a classic fit, metal-on-acetate details, a unique double nose bridge, and polarized lenses.",
        price: 52.50,
        discount: null,
        image: '/img/prod-04.png',
        category: 'male',
        stock: 10,
        gallery: [
            "https://cdn.shopify.com/s/files/1/0677/4111/products/DIFF714203997_720x.jpg?v=1597431712",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_front_1600x.progressive.jpg?v=1593200132",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_angle_720x.jpg?v=1593200137"
        ]
    },
    {
        id: 5,
        name: 'Maxwell Whiskey Grey',
        description: "Maxed out. Maxwell is our slim silhouette that brings all the style. Bring them to the beach or pack them for the party – not matter where you take them, these frames fit right in.",
        price: 52.50,
        discount: '-10%',
        image: '/img/prod-05.png',
        category: 'male',
        stock: 10,
        gallery: [
            "https://cdn.shopify.com/s/files/1/0677/4111/products/DIFF714203997_720x.jpg?v=1597431712",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_front_1600x.progressive.jpg?v=1593200132",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_angle_720x.jpg?v=1593200137"
        ]
    },
    {
        id: 6,
        name: 'Candem Black Marble Grey',
        description: "A classic, spruced up. Camden is a standout in a classic fit, metal-on-acetate details, a unique double nose bridge, and polarized lenses.",
        price: 52.50,
        discount: null,
        image: '/img/prod-06.png',
        category: 'female',
        stock: 10,
        gallery: [
            "https://cdn.shopify.com/s/files/1/0677/4111/products/DIFF714203997_720x.jpg?v=1597431712",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_front_1600x.progressive.jpg?v=1593200132",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_angle_720x.jpg?v=1593200137"
        ]
    },
    {
        id: 7,
        name: 'Colton Black Grey',
        description: "Grab and go essential. Colton features a sturdy acetate frame in a universal medium fit, molded nose bridge, and polarized lenses.",
        price: 52.50,
        discount: '-10%',
        image: '/img/prod-07.png',
        category: 'male',
        stock: 10,
        gallery: [
            "https://cdn.shopify.com/s/files/1/0677/4111/products/DIFF714203997_720x.jpg?v=1597431712",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_front_1600x.progressive.jpg?v=1593200132",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_angle_720x.jpg?v=1593200137"
        ]
    },
    {
        id: 8,
        name: 'Maxwell Vintage Crystall Brown',
        description: "Maxed out. Maxwell is our slim silhouette that brings all the style. Bring them to the beach or pack them for the party – no matter where you take them, these frames fit right in.",
        price: 67.50,
        discount: null,
        image: '/img/prod-08.png',
        category: 'female',
        stock: 10,
        gallery: [
            "https://cdn.shopify.com/s/files/1/0677/4111/products/DIFF714203997_720x.jpg?v=1597431712",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_front_1600x.progressive.jpg?v=1593200132",
            "https://cdn.shopify.com/s/files/1/0677/4111/products/maxwell_WS-GR188P_angle_720x.jpg?v=1593200137"
        ]
    }
]

const getProducts = () => {
    return new Promise((resolve, reject) => {    
        setTimeout(() => {
            resolve(products)
        }, 2000) // 2s
    })
}

const getProduct = id => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const product = products.find(product => product.id === parseInt(id))
            resolve(product)
        }, 2000) // 2s
    })
}

const getProductsByCategory = category => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productsByCategory = products.filter(product => product.category === category)
            resolve(productsByCategory)
        }, 2000) // 2s
    })
}

export { getProducts, getProduct, getProductsByCategory }