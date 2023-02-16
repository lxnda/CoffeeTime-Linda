window.addEventListener("load", preguntar);

function preguntar() {
    document.getElementById("enviar-contact").addEventListener("click", MostrarNotificacion);
    document.getElementById("btn-pagar").addEventListener("click",MostrarNotiPedido);
    Notification.requestPermission().then((resultado) => {
        console.log("podemos mostrar la notificacion? ", resultado);
    });
}

function MostrarNotificacion() {
    var contenido = document.getElementById("mensaje-cont").value;
    if (Notification.permission == "granted") {
        const noti = new Notification("Hemos enviado tu mensaje...", {
            body: contenido,
        });
    } else {
        alert("Necesitas permitir las notificaciones!!");
    }
}

function MostrarNotiPedido() {
    if (localStorage.getItem("SsIniciada")=='true') {
        if (Notification.permission == "granted") {
            const notificaion = new Notification("Felicidades!!!...", {
                body: "Tu pedido ha sido realizado con exito",
            });
        } else {
            alert("Necesitas permitir las notificaciones!!");
        }
    }else
        alert('necesitas iniciar sesion para comprar');
}