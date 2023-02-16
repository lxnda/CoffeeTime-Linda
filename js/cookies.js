

const btncookies = document.getElementById("btn-cookie");
const banner = document.getElementById("cookie-banner");
const overlaycookies = document.getElementById("overlay-cookies");

//condicional para saber si se ha guardado las cookies
if (!localStorage.getItem('cookies-aceptadas')) {
    banner.classList.add('activo');
    overlaycookies.classList.add('activo');
}

btncookies.addEventListener('click', ocultarCookie);

//funcion para ocultar las cookies
function ocultarCookie() {
    banner.classList.remove('activo');
    overlaycookies.classList.remove('activo');
    localStorage.setItem('cookies-aceptadas', true);
}