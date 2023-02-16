
//variables
const Login = document.getElementById('login');
const Register = document.getElementById('register');
const divLogin = document.getElementById('popup-login');
const btnLogin = document.getElementById('btn-login');
const divRegister = document.getElementById('popup-register');
const linkRegister = document.getElementById('link-register');
const btnRegister = document.getElementById('btn-register');
const linkLogin = document.getElementById('link-login');
const divsalir = document.getElementById('logout');
const diviniciar = document.getElementById('div-login');
const formopclogin = document.getElementById('opc-login');
const listUsersLS = JSON.parse(localStorage.getItem("listUsersLS"));
var userlogueado;
var urlActual = location.pathname;

if (localStorage.getItem('userLogueado') == "") {
    userlogueado = localStorage.setItem('userLogueado', "");
} else { 
    userlogueado = localStorage.getItem('userLogueado');
}
    
if (localStorage.getItem('SsIniciada')==null) {
    localStorage.setItem('SsIniciada', false); 
}


//eventos
Login.addEventListener('click', mostrarPopUpLogin);
Register.addEventListener('click', mostrarPopUpRegister);
btnLogin.addEventListener('click', validarCredenciales);
linkRegister.addEventListener('click', mostrarPopUpRegister);
linkLogin.addEventListener('click', mostrarPopUpLogin);
btnRegister.addEventListener('click', registrarse);
window.addEventListener('load', verificarSesion);


//funciones
function verificarSesion() {
    if (urlActual == '/index.html') {
        SesionIniciada(userlogueado);
    } else if (urlActual == '/shop.html') {
        SesionIniciada(userlogueado);
    } else if (urlActual == '/blog.html') {
        SesionIniciada(userlogueado);
    }
}


function mostrarPopUpLogin() {
    if (divLogin.style.display == "none") {
        divLogin.style.display = "block";
        divRegister.style.display = "none";
    } else {
        divLogin.style.display = "none";
    }
}

function mostrarPopUpRegister() {
    if (divRegister.style.display == "none") {
        divRegister.style.display = "block";
        divLogin.style.display = "none";
    } else {
        divRegister.style.display = "none";

    }
}

//iniciamos una funcion al iniciar

window.onload = function () {
    //creamos los usuarios predefinidos
    if (localStorage.getItem("listUsersLS") == null) {
        localStorage.setItem("listUsersLS", "[]");
        // nombre, apellidos, correo,     contraseña
        let [nombre, apellidos, email, password] = ['admin', 'admin', 'admin@gmail.com', 'admin'];
        createUser(nombre, apellidos, email, password);

    }
}


//LOGIN 
function validarCredenciales() {
    var email = document.getElementById('lgn-user').value;
    var password = document.getElementById('lgn-password').value;

    

    if (localStorage.getItem("listUsersLS") == null) {
        alertNoRegistrado();
    } else {
        
        for (let i = 0; i < listUsersLS.length && localStorage.getItem('SsIniciada')!='true' ; i++) {
            if (listUsersLS[i].email == email && listUsersLS[i].password == password ) {
                var nombre = listUsersLS[i].nombre;
                localStorage.setItem('SsIniciada', true);
                userlogueado = localStorage.setItem('userLogueado', nombre);
                window.location.reload();
            } else {
                localStorage.setItem('SsIniciada', false);
                alertNoRegistrado();
            }
        }
        SesionIniciada();
        
    }
}

function alertNoRegistrado() {
    const alertPlaceholder = document.getElementById('AlertPlaceHolder-login')
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        '<div class="alert alert-warning alert-dismissible" role="alert">',
        '<div>Primero tienes que registrarte</div>',
        '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
    alertPlaceholder.append(wrapper);
}

function SesionIniciada() {
    if (localStorage.getItem('SsIniciada')=='true') {
        divLogin.style.display = "none";
        document.getElementById('li-user').style.display = 'block';
        document.getElementById('user').innerHTML = userlogueado;
        formopclogin.firstElementChild.style.display = "none";
        divsalir.style.display = "block";
        var logout = document.getElementById('salir');
        logout.addEventListener('click', cerrarSesion);
    } else {
        document.getElementById('li-user').style.display = 'none';
        divsalir.style.display = "none";
        formopclogin.firstElementChild.style.display = "block";
        localStorage.setItem('userLogueado'," ");
    }


}

function cerrarSesion() {
    if (localStorage.getItem('SsIniciada')) {
        diviniciar.style.display = "block";
        divsalir.style.display = "none";
        localStorage.setItem('SsIniciada', false);
        document.getElementById('li-user').style.display = 'none';
        localStorage.setItem('userLogueado'," ");
        //localStorage.removeItem();
        window.location.href = "index.html";

    }


}


//REGISTER
function registrarse() {
    if (localStorage.getItem("listUsersLS") == null) {
        localStorage.setItem("listUsersLS", "[]");
    }

    //recogemos los datos del formulario
    let nombre = document.getElementById('Rgs-nombre').value;
    let apellidos = document.getElementById('Rgs-apellidos').value;
    let email = document.getElementById('Rgs-correo').value;
    let password = document.getElementById('Rgs-password').value;

    //validamos con expresiones regulares
    const regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
    if(regExp.test(email)=='false'){
        emailNoValido();

            // almacenamos el usuario en un array con los demas usuarios
    }else if (createUser(nombre, apellidos, email, password)) {
        window.location.href = "/index.html";
    }
}

function createUser(nombre, apellidos, email, password) {
    let on = false;
    const newUser = {
        "nombre": nombre,
        "apellidos": apellidos,
        "email": email,
        "password": password
    }

    const users = JSON.parse(localStorage.getItem("listUsersLS"));
    
        if (users.some(user => user.email == email)) {
            alertYaRegistrado();
        } else {
            users.push(newUser);
            localStorage.setItem("listUsersLS", JSON.stringify(users));
            on = true;
        }
        
    
    
    return on;
}

function alertYaRegistrado() {
    const alertPlaceholder = document.getElementById('AlertPlaceHolder-register')
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        '<div class="alert alert-warning alert-dismissible" role="alert">',
        '   <div>Ya estas registrado prueba a iniciar sesion</div>',
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
}

function emailNoValido() {
    const alertPlaceholder = document.getElementById('AlertPlaceHolder-register')
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        '<div class="alert alert-warning alert-dismissible" role="alert">',
        '   <div>El formato de email que has introducido no es valido</div>',
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');

    alertPlaceholder.append(wrapper);
}