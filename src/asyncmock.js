const productos = [
    { nombre: "Camiseta Celeste y Blanca de la Selección Argentina de Futbol", precio: 25000, id: "1", img: "../img/Camiseta_Blanca_Arg.jpeg", idCat: "2" },
    { nombre: "Camiseta Negra de la Selección Argentina de Futbol", precio: 22000, id: "2", img: "../img/Camiseta_Negra_Arg.jpeg", idCat: "2" },
    { nombre: "Campera Blanca de la Selección Argentina de Futbol", precio: 40000, id: "3", img: "../img/Campera_Blanca_Arg.jpeg", idCat: "3" },
    { nombre: "Campera Negra de la Selección Argentina de Futbol", precio: 37500, id: "4", img: "../img/Campera_Negra_Arg.jpeg", idCat: "3" },
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
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria)
            resolve(productosCategoria);
        }, 100)
    })
}