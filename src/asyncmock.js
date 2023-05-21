const productos = [
    {nombre: "Montain", precio: 18500, id: "1", img: "../img/Montain.png",idCat: "2" },
    {nombre: "Nesdar", precio: 28180, id: "2", img: "../img/Nesdar.jpg",idCat: "2" },
    {nombre: "Playera", precio: 40200, id: "3", img: "../img/Playera.jpg",idCat: "3" },
    {nombre: "Shymano", precio: 38400, id:"4", img: "../img/Shymano.jpeg",idCat: "3" },
]
export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 100)
    })
}

//Creamos una nueva función similar a la anterior pero que nos retorne un solo item:

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 100)
    })
}

//Creamos una nueva función que retorna toda la categoría. 

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}