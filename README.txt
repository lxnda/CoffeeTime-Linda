#Nombre de proyecto
    ##Coffe Time

        un prototipo de pagina para una tienda en línea dedicada 
        a la venta de café de alta calidad. y sobre todo para destacar
        cada producto en venta de la tiena.



###IMPORTANTE!!!!
    hay que dar dos veces click al icono del carrito para que salte el pop up
    y tambien cuando queremos iniciar sesio o registrarnos;



#Arbol de directorios

    ##fichero principal de inicio
            index.html


    /CoffeTime
        │ blog.html
        │ index.html
        │ README.txt
        │ shop.html
        ├───clips
        |    CafÃ© - 126805.mp4
        │    CafÃ© - 80134.mp4
        │    CafÃ© - 80138.mp4
        ├───css
        |    animacion.css
        │    blog.css
        │    form.css
        │    media.css
        │    style.css
        ├───img
        │   |   bg1.jpg
        │   │   bg2.jpg
        │   │   bg3.jpg
        │   │   carousel1.jpg
        │   │   carousel2.jpg
        │   │   carousel3.jpg
        │   │   carousel4.jpg
        │   │   carousel5.jpg
        |   │   carousel6.jpg
        |   |
        │   ├───bags
        │   │     bag-capsulas1.png
        │   │     bag-capsulas2.png
        │   │     bag-capsulas3.png
        │   │     bag-capsulas4.png
        │   │     bag-grano1.png
        │   │     bag-grano2.png
        │   │     bag-grano3.png
        │   │     bag-grano4.png
        │   │     bag-molido1.png
        │   │     bag-molido2.png
        │   │     bag-molido3.png
        │   │     bag-molido4.png
        │   │     bag-promo1.png
        │   │     bag-promo2.png
        │   │     bag-promo3.png
        │   │     bag-promo4.png
        │   │     des-bag1.png
        │   │     des-bag2.png
        │   │     des-bag3.png
        │   │     des-bag4.png
        │   │
        │   │
        │   ├───blog
        │   │       blog-1.jpg
        │   │       blog-10.jpg
        │   │       blog-2.jpg
        │   │       blog-3.jpg
        │   │       blog-4.jpg
        │   │       blog-5.jpg
        │   │       blog-6.jpg
        │   │       blog-7.jpg
        │   │       blog-8.jpg
        │   │       blog-9.jpg
        │   │
        │   └───personas
        │           persona1.jpg
        │           persona2.jpg
        │           persona3.jpg
        │           persona4.jpg
        ├───js
        │       ajax.js
        │       animacion.js
        │       carrito.js
        │       cookies.js
        │       index.js
        │       login.js
        │       map.js
        │       notificacion.js
        │       search.js
        │
        └───json
                fichero.json

#Logueo y Registro
    ##Usuario por defecto
        //nombre, apellidos, email,        contraseña.
          'admin', 'admin', 'admin@gmail.com', 'admin'.

        el archivo se encuentra en /CoffeTime/js/login.js
        
        las funciones mas importantes son 
            mostrarPopUpLogin();
            mostrarPopUpRegister();
            validarCredenciales();
            SesionIniciada();
            cerrarSesion();

#Cookies y WebStorage
    ##Cookies
        Las cookies se crean automaticamente si no hay ninguna
        en localStorage y comprueba de que se hayan aceptado las
        cookies.

        la cookie es un item creado de como booleano.

        el archivo se encuentra en /CoffeTime/js/cookies.js
    ##WebStorage
        los items de Logueo son creados en un array y pasados como string
        al localStorage 

        tenemos un booleano que comprueba que la sesion se ha iniciado

        tambien tenemos un item utilizada como un array para guardar los 
        distintos usuarios creados.

        ###funciones
            validarCredenciales()
            esta funcion recoge los datos del formulario login y los compara 
            con los usuarios de la lista de localStorage. busca si coincide alguno
            entonces nos logueamos en caso de no coincidencia con ningun usuario 
            de la lista nos retonra la funcion de alertNoRegistrado();

            SesionIniciada(userlogueado);
            esta funcion comprueba que la sesion ha sido iniciada en caso de no 
            nos sigue mostrando el formulario para loguearnos o registrarnos.

            function cerrarSesion()
            esta funcion nos cierra la sesion mediante el booleano;

#Elementos multimedia
    ##Imagenes
        las imagenes estan cargadas con AJAX atraves de un archivo js conectando
        con un archivo json.

        el archivo json se encuentra en /CoffeTime/json/fichero.json 

        ###Imagenes Creatives Commons
            Todas las imagenes y videos son sacadas de la pagina https://www.pexels.com
            estan especificas en el archivo json con su respectivo link y autor.


    ##iconos
        los iconos utilizados son de un api de la pagina https://fontawesome.com/
        tiene licencia libre para uso de paginas.
    
#Notificaciones
    la pagina tiene dos Notificaciones 

    1-en la seccion de contacto que te notifica 
    que se ha enviado el mensaje escrito en el formulario.

    2-en la seccion de compra una vez logueado al darle a comprar te envia una notificacion
    de que el pedido se ha realizado correctamente.


    
##GUIA DE ESTILOS
https://www.flipsnack.com/6EEBB577C6F/guia-de-estilos-linda.html