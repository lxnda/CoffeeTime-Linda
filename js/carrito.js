
const btncarrito = document.getElementById('icon-carrito');
const divCarrito = document.getElementById('popup-carrito');

btncarrito.addEventListener('click', mostrarCarrrito);

function mostrarCarrrito() {
    if (divCarrito.style.display == "none") {
        divCarrito.style.display = "block";
    } else {
        divCarrito.style.display = "none";
    }
}

const btnvaciar = document.getElementById('btn-vaciar');
const btncomprar = document.getElementById('btn-pagar');
const btnañadir = document.getElementsByClassName('btn-añadir');
const listCarrito = document.getElementById('c-carrito');
var totalCarrito = document.getElementById('p-total');
let carrito = [];
let carritoLS = [];  
let total = 0;

//eventos
for (let i = 0; i < btnañadir.length; i++) {
    btnañadir[i].addEventListener('click', añadirProductoC);
}
btnvaciar.addEventListener('click', vaciarCarrito);
btncomprar.addEventListener('click', InicioSesion);

function añadirProductoC(e) {

    //guardamos los datos en un array
        for (let i = 0; i < 3; i++) {
        carrito.push(e.target.parentElement.children[i].textContent);
        }
    
    //carrito.push(";");  para saber donde acaba un producto
    console.log(carrito);


    //creamos elementos
    const minodo = document.createElement('li');
    const divnodo = document.createElement('div');
    const h5nodo = document.createElement('h5');
    const spanNumNodos = document.createElement('span');
    const spanNodo = document.createElement('span');
    const miBoton = document.createElement('button');

    //agregar clases y estilos a los nodos
    minodo.classList.add('list-group-item', 'text-right', 'mx-2', 'carrito-item');
    divnodo.classList.add('card-body');
    miBoton.classList.add('btn', 'btn-danger', 'mx-5');
    miBoton.style.marginLeft = '1rem';
    miBoton.classList.add('btn-items')
    h5nodo.classList.add('producto','card-title','ms-4');
    spanNodo.classList.add('precio','card-text');

    //añadir el contenido a los nodos
    h5nodo.textContent = carrito[0];
    spanNodo.textContent = carrito[2];
    miBoton.textContent = 'X';


    //Insertamos
    divnodo.appendChild(h5nodo);
    divnodo.appendChild(spanNumNodos);
    divnodo.appendChild(spanNodo);
    divnodo.appendChild(miBoton);
    minodo.appendChild(divnodo);
    listCarrito.appendChild(minodo);

    //eliminar con boton 
    miBoton.addEventListener('click', borrarItem);

    //sumar el total
    let precio = carrito[2];
    let separar = precio.split(" ");
    var cantidad = parseFloat(separar[0]);
    total += cantidad;

    carrito = [];
    totalCarrito.innerHTML = total.toFixed(2);

}

//funcion de borrar el item 
function borrarItem(e) {
    e.target.parentElement.remove();

    //borrar solo el precio de un item para restar al total
    var itemp = e.target.parentElement.children[2].textContent;
    let separar = itemp.split(" ");
    var cantidad = parseFloat(separar[0]);
    if (totalCarrito.innerHTML >= 0) {
        total = total - cantidad;
        totalCarrito.innerHTML = total.toFixed(2);
    } else {
        totalCarrito.innerHTML = 0;
    }
}

function vaciarCarrito() {
    //borramos todo de la lista
    listCarrito.innerHTML = "";
    total = 0;
    totalCarrito.innerHTML = 0;

}

function InicioSesion() {
    const carritoItems = document.getElementsByClassName('carrito-item');
    const items=document.querySelectorAll('.producto');
    const precio=document.querySelectorAll('.precio');

    //hacer un if para comprobar si esta la sesion iniciada
    if (localStorage.getItem('SsIniciada')=='true') {
        //guardar en array para LocalStorage
        for (let i = 0; i < carritoItems.length; i++) {
            var mycarritoLS={
                producto: items[i].textContent,
                precio: precio[i].textContent,
            };
            carritoLS.push(mycarritoLS);
        }
        localStorage.setItem("carritoLS",JSON.stringify(carritoLS));
        alert('Tu compra ha sido realizada con exito');
    }else{
        alert('Debes iniciar sesion para comprar');
    }
}



