// CARGA DEL HEADER AL CARGAR LA PÁGINA
document.addEventListener("DOMContentLoaded", () => {
  const rutaHeader = window.location.pathname.includes("/pages/")
    ? "../componentes/header.html"
    : "componentes/header.html";

  fetch(rutaHeader)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;
      ajustarRutasHeader();
      activarMenuHamburguesa();
    })
    .catch((error) => {
      console.error("Error al cargar el header:", error);
    });
});

// AJUSTA LAS RUTAS SEGÚN LA PROFUNDIDAD DE LA PÁGINA
const ajustarRutasHeader = () => {
  const rutaBase = window.location.pathname.includes("/pages/") ? "../" : "";
  const enlaces = document.querySelectorAll("[data-href]");

  enlaces.forEach((enlace) => {
    const destino = enlace.getAttribute("data-href");
    enlace.setAttribute("href", rutaBase + destino);
  });

  const logo = document.querySelector(".logo-link");
  if (logo?.hasAttribute("data-href")) {
    logo.setAttribute("href", rutaBase + logo.getAttribute("data-href"));
  }
};

// MENU HAMBURGUESA RESPONSIVE
const activarMenuHamburguesa = () => {
  const boton = document.querySelector(".menu_hamburguesa");
  const nav = document.querySelector("nav");

  if (boton && nav) {
    boton.addEventListener("click", () => {
      nav.classList.toggle("activo");
    });
  }
};
