import { getOneProducts, getProductInCategory } from "../services/products.js"

const id = new URLSearchParams(window.location.search).get('id')
//Inicializar elementos

const tarea_image = document.getElementById("tarea-image")
const tarea_title = document.getElementById("tarea-title")
const tarea_responsable = document.getElementById("tarea-responsable")
const tarea_description = document.getElementById("tarea-description")



//Rellenamos los detalles del producto
const fillDetailProduct = async ()=>{
    const tarea = await getOneProducts(id)

    if(tarea){
        tarea_image.src = tarea.image
        tarea_title.innerText = tarea.title
        tarea_responsable.innerText = "Responsable: "+tarea.responsable
        tarea_description.innerText = tarea.description

    }
}

fillDetailProduct()