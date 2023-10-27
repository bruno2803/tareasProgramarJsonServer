//Importaciones
import { getAllProducts } from "../services/products.js"
//Instancias de elementos
const contenedor_porHacer = document.getElementById("contenedor-PorHacer")
const contenedor_realizadas = document.getElementById("contenedor-Realizadas")
const contenedor_interrumpidas = document.getElementById("contenedor-Interrumpidas")

const fillProducts = async()=>{
    const products = await getAllProducts()
    products.forEach(product => {
        const estado = product.estado

        let container;
        if(estado === 1){
            container = contenedor_porHacer
        }else if(estado === 2){
            container = contenedor_realizadas
        }else if(estado === 3){
            container = contenedor_interrumpidas
        }

        //crear elemento en la categoria

        container.innerHTML += `<div class="col">
        <div class="card h-100">
            <img style="min-height: 300px; max-height: 300px"
            class="card-img-top" src="${product.image}" alt="">
            <div class="card-body p-4">
                <div class="text-center">
                    <h5 class="fw-bolder">${product.title}</h5>
                    <span>${product.description}</span>
                </div>
            </div>
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center d-flex gap-1">
                   <a class="btn btn-outline-secondary mt-auto" href="/detalle.html?id=${product.id}">Ver tarea</a>
                   <a class="btn btn-outline-success mt-auto" href="">Añadir al carrito</a>
                </div>
            </div>
        </div>

    </div>`
    });
}

fillProducts()