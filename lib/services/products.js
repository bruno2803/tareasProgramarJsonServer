export function getAllProducts(){
    return fetch('http://localhost:3000/tareas')
            .then(res=>res.json())
            .then(json=>json)
}

export function getOneProducts(id){
    return fetch(`http://localhost:3000/tareas/${id}`)
            .then(res=>res.json())
            .then(json=>json)
}

export function getProductInCategory(categoria){
    return fetch(`https://fakestoreapi.com/products/category/${categoria}`)
            .then(res=>res.json())
            .then(json=>json)
}