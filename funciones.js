// NÚMERO DE WHATSAPP DE LA BARBERÍA
// Escribe el código del país y el número, sin espacios ni signos.
const numeroWhatsApp = "527226155280";

// BOTÓN FLOTANTE DE WHATSAPP
const whatsappLink = document.getElementById("whatsapp-link");
whatsappLink.href = `https://wa.me/${numeroWhatsApp}`;

// MENÚ PARA CELULARES
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// CERRAR MENÚ AL SELECCIONAR UNA SECCIÓN
document.querySelectorAll(".nav-links a").forEach(enlace => {
    enlace.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// EVITAR FECHAS PASADAS
const campoFecha = document.getElementById("fecha");

const hoy = new Date();
const fechaLocal = new Date(
    hoy.getTime() - hoy.getTimezoneOffset() * 60000
).toISOString().split("T")[0];

campoFecha.min = fechaLocal;

// FORMULARIO DE RESERVACIÓN
const formulario = document.getElementById("booking-form");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = document.getElementById("servicio").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const comentario = document.getElementById("comentario").value.trim();

    if (!nombre || !telefono || !servicio || !fecha || !hora) {
        alert("Completa todos los campos obligatorios.");
        return;
    }

    if (fecha < fechaLocal) {
        alert("Selecciona una fecha válida.");
        return;
    }

    const mensaje =
        `Hola, quiero solicitar una cita en BLACK ELITE.%0A%0A` +
        `Nombre: ${encodeURIComponent(nombre)}%0A` +
        `Teléfono: ${encodeURIComponent(telefono)}%0A` +
        `Servicio: ${encodeURIComponent(servicio)}%0A` +
        `Fecha: ${encodeURIComponent(fecha)}%0A` +
        `Hora: ${encodeURIComponent(hora)}%0A` +
        `Comentario: ${encodeURIComponent(comentario || "Sin comentarios")}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    window.open(url, "_blank");
});