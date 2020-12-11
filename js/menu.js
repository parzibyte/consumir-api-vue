// Tomado de https://github.com/parzibyte/cotizaciones_web/blob/master/js/cotizaciones.js#L2
document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector("#menu"),
        botonMenu = document.querySelector("#botonMenu");
    if (menu) {
        botonMenu.addEventListener("click", () => menu.classList.toggle("show"));
    }
});