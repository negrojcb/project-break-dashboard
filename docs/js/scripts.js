//Imágenes de Fondo aleatorias

const arrayImgs = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
];

const cambiarFondo = () => {
  const arrLength = arrayImgs.length;
  let index = Math.floor(Math.random() * arrLength);
  let img = arrayImgs[index];
  document.body.style.backgroundImage = `url('assets/imagenes/${img}')`;
};
cambiarFondo();

setInterval(cambiarFondo, 15000);

import { initLinks } from "./links.js";
import { initMeteo } from "./meteo.js";
import { initPass } from "./contraseñas.js";
import { initReloj } from "./reloj.js";

function initApps() {
  initMeteo();
  initLinks();
  initPass();
  initReloj();
}

document.addEventListener("DOMContentLoaded", () => {
  initApps();
});
