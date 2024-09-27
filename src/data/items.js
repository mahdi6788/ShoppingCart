const productList = [
    {
        id: '1',
        title: 'Product',
        price: 99,
        image: "../images/bag.jpg"
    },
    {
        id: '2',
        title: 'Product',
        price: 99,
        image: '../images/sunglass.webp'
    },
    {
        id: '3',
        title: 'Product',
        price: 99,
        image: '../images/denim.jpg'
    },
    {
        id: '4',
        title: 'Product',
        price: 99,
        image: '../images/highHeel.jpg'
    }
]

function getProductData(id) {
    let productData = productList.find(product => product.id === id)

    return productData
}

export {productList, getProductData}