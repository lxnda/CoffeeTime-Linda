
window.addEventListener('load', iniciar);

function iniciar() {
    fetch('./json/fichero.json')
        .then(respuesta => respuesta.json())
        .then(json => cargarimg(json))
        .catch(e => console.log(e));
}




function cargarimg(myobj) {
    let urlActual = location.pathname;
    if (urlActual == "/index.html") {

        cargarIndex(myobj);
    } else if (urlActual == "/shop.html") {

        cargarShop(myobj);
    } else if (urlActual == "/blog.html") {

        cargarBlog(myobj);
    }

}

function cargarShop(myobj) {
    /* IMAGENES E INFORMACION DE SHOP */
    var cafepromos = document.getElementsByClassName('img-cfpromo');
    var cafesmolido = document.getElementsByClassName('img-cfmolido');
    var cafesgrano = document.getElementsByClassName('img-cfgrano');
    var cafescapsulas = document.getElementsByClassName('img-cfcapsulas');
    var cafesdesta = document.getElementsByClassName('img-dest');

    var cp = 0;
    var cm = 0;
    var cg = 0;
    var cc = 0;
    var cd = 0;
    for (const i in myobj['@backgrounds']) {
        if (myobj['@backgrounds'][i].name == "carouselshop") {
            document.getElementById('img-carousel-shop').src = myobj['@backgrounds'][i].url;
        }
    }

    for (let i = 0; i < myobj['@products'].length; i++) {
        /*section molido*/
        if (myobj['@products'][i].tipo == 'molido') {
            cafesmolido[cm].src = myobj['@products'][i].url;
            document.getElementsByClassName('desc-molido')[cm].innerHTML = myobj['@products'][i].informacion;
            document.getElementsByClassName('p-molido')[cm].innerHTML = myobj['@products'][i].precio;
            cm++;
        } /*section grano*/
        else if (myobj['@products'][i].tipo == 'grano') {
            cafesgrano[cg].src = myobj['@products'][i].url;
            document.getElementsByClassName('desc-grano')[cg].innerHTML = myobj['@products'][i].informacion;
            document.getElementsByClassName('p-grano')[cg].innerHTML = myobj['@products'][i].precio;
            cg++;

        } /*section capsulas*/
        else if (myobj['@products'][i].tipo == 'capsulas') {
            cafescapsulas[cc].src = myobj['@products'][i].url;
            document.getElementsByClassName('desc-capsulas')[cc].innerHTML = myobj['@products'][i].informacion;
            document.getElementsByClassName('p-capsulas')[cc].innerHTML = myobj['@products'][i].precio;
            cc++;
        } /*section destacados*/
        else if (myobj['@products'][i].tipo == 'destacadas') {
            cafesdesta[cd].src = myobj['@products'][i].url;
            document.getElementsByClassName('desc-dest')[cd].innerHTML = myobj['@products'][i].informacion;
            cd++;
        }/*section promociones*/
        else if (myobj['@products'][i].tipo == 'promo' && myobj['@products'][i].promo == 'true') {
            cafepromos[cp].src = myobj['@products'][i].url;
            document.getElementsByClassName('desc-promos')[cp].innerHTML = myobj['@products'][i].informacion;
            document.getElementsByClassName('p-promos')[cp].innerHTML = myobj['@products'][i].precio;
            cp++;
        }
    }
    /* IMAGENES E INFORMACION DE SHOP END*/
}

function cargarIndex(myobj) {

    /*IMAGENES INDEX */

    /*carousel */
    var ccarousel = 0;
    for (let i = 0; i < myobj['@backgrounds'].length; i++) {
        /*carousel*/
        if (myobj['@backgrounds'][i].tipo == "carousel" && ccarousel <= 3) {
            document.getElementsByClassName('img-carousel')[ccarousel].src = myobj['@backgrounds'][i].url;
            ccarousel++;
        }/*historia */
        else if (myobj['@backgrounds'][i].name == 'historia') {
            var url = myobj['@backgrounds'][i].url;
            document.getElementById('img-historia').style.backgroundImage = `url(${url})`;
        }/*records */
        else if (myobj['@backgrounds'][i].name == 'records') {
            var url = myobj['@backgrounds'][i].url;
            document.getElementById('sc-counter').style.backgroundImage = `url(${url})`;
        }/*opiniones */
        else if (myobj['@backgrounds'][i].name == 'opiniones') {
            var url = myobj['@backgrounds'][i].url;
            document.getElementById('sc-opi').style.backgroundImage = `url(${url})`;
        }
        /*Cafes mas vendidos */
        var cimgdes = 0;
        for (let i = 0; i < myobj['@products'].length; i++) {
            if (myobj['@products'][i].tipo == "destacadas") {
                document.getElementsByClassName('img-dest')[cimgdes].src = myobj['@products'][i].url;
                document.getElementsByClassName('title-dest')[cimgdes].innerHTML = myobj['@products'][i].titulo;
                document.getElementsByClassName('desc-dest')[cimgdes].innerHTML = myobj['@products'][i].informacion
                cimgdes++;
            }
        }
        /*opiniones */
        var opic = 0;
        for (let i = 0; i < myobj['@personas'].length; i++) {
            document.getElementsByClassName('imgs-opi')[opic].src = myobj['@personas'][i].url;
            document.getElementsByClassName('comentarios')[opic].innerHTML = myobj['@personas'][i].comentario;
            document.getElementsByClassName('opi-nombres')[opic].innerHTML = myobj['@personas'][i].name;
            document.getElementsByClassName('opi-profesion')[opic].innerHTML = myobj['@personas'][i].profesion;
            opic++;
        }

    }

    /*IMAGENES INDEX END*/

}

function cargarBlog(myobj) {
    console.log("entramos en blog?")
    for (let i = 0; i < myobj['@backgrounds'].length; i++) {
        if (myobj['@backgrounds'][i].name == 'historia') {
            var urlhistoria = myobj['@backgrounds'][i].url;
            document.getElementById('img-historia-blog').style.backgroundImage = `url(${urlhistoria})`;
        } else if (myobj['@backgrounds'][i].name == 'carouselblog') {
            document.getElementById('img-carousel-blog').src = myobj['@backgrounds'][i].url;
        }
    }
    for (let i = 0; i < myobj['@blog'].length; i++) {
        document.getElementsByClassName('imgs-blog')[i].src = myobj['@blog'][i].url;

    }

}