//Fecha y Hora
function changeDate() {
  const date = new Date();
  const time = date.toLocaleString();
  const divMuestra = document.getElementById("div-prueba");
  divMuestra.textContent = time;
}
let nIntervId;

function imprimirHora() {
  nIntervId = setInterval(changeDate, 1000);
}

imprimirHora();

//Contraseñas

// ## Generador de contraseñas seguras:

const longitud = document.getElementById("longitud");
const boton = document.getElementById("generar");
const msg = document.getElementById("msg");
//let passwordArray = [];
const numeros = Array.from({ length: 10 }, (_, i) => i);
const minusculas = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i)
);
const mayusculas = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);
const simbolos = "!@#$%^&*()-_=+".split("");
let caracteresObligatorios = [numeros, mayusculas, minusculas, simbolos];
const caracteres = numeros.concat(minusculas, mayusculas, simbolos);
const caracteresString = caracteres.join("");

boton.addEventListener("click", () => {
  const valor = parseInt(longitud.value);
  //passwordArray = [];
  msg.innerHTML = "";
  if (valor < 12 || valor > 50 || isNaN(valor)) {
    msg.innerText = "Por favor ingresa un numero entre 12 y 50";
  } else {
    const obligatorios = camposObligados();
    const restantes = camposRestantes(valor);
    let pass = obligatorios.concat(restantes);
    let desorden = pass.sort(() => Math.random() - 0.5);
    const tuContraseña = desorden.join("");
    console.log(tuContraseña);
    msg.innerText = `Tu contraseña es: ${tuContraseña}`;
  }
});

//incluir al menos un caracter obligatorio de cada tipo de caracter

function camposObligados() {
  let obligatorios = [];
  caracteresObligatorios.forEach((grupo) => {
    let indice = Math.floor(Math.random() * grupo.length);
    obligatorios.push(grupo[indice]);
  });
  return obligatorios;
}

function camposRestantes(l) {
  let restantes = [];
  for (let i = 0; i < l - 4; i++) {
    let indice = Math.floor(Math.random() * caracteresString.length);
    restantes.push(caracteresString[indice]);
  }
  return restantes;
}

//Generador de Links

// const titulo = document.getElementById('titulo');
// const url = document.getElementById('url');
// const boton = document.getElementById('generar');
// const lista = document.getElementById('lista');

// let linkList = JSON.parse(localStorage.getItem('Links')) || [];
// linkList.forEach((link) => pintarLink(link));
// console.log(linkList);

// boton.addEventListener('click', () => {
//   generarLink();
// });

// function generarLink() {
//   let valorTitulo = titulo.value.trim();
//   let valorUrl = url.value.trim();
//   if (!valorTitulo) {
//     console.log('Ingresa un titulo para tu link');
//     return;
//   } else if (!valorUrl) {
//     console.log('Ingrersa una url');
//     return;
//   } else {
//     const nuevoId = Date.now();
//     const linkObj = {
//       id: nuevoId,
//       title: valorTitulo,
//       url: valorUrl,
//     };
//     linkList.push(linkObj);
//     localStorage.setItem('Links', JSON.stringify(linkList));
//     pintarLink(linkObj);
//     titulo.value = ' ';
//     url.value = ' ';
//   }
// }

// function pintarLink(nuevo) {
//   const item = document.createElement('li');
//   const anchor = document.createElement('a');
//   const resetBtn = document.createElement('button');
//   item.setAttribute('id', nuevo.id);
//   anchor.setAttribute('target', 'blank');
//   resetBtn.innerText = 'Delete';
//   anchor.textContent = nuevo.title;
//   anchor.href = nuevo.url;
//   item.appendChild(anchor);
//   item.appendChild(resetBtn);
//   lista.appendChild(item);
//   resetBtn.addEventListener('click', () => {
//     borrarLink(item);
//   });
// }

// function borrarLink(element) {
//   const idABorrar = element.id;
//   const index = linkList.findIndex((linkObj) => {
//     return Number(linkObj.id) === Number(idABorrar);
//   });
//   if (index > -1) {
//     linkList.splice(index, 1);
//     localStorage.setItem('Links', JSON.stringify(linkList));
//     console.log(linkList);
//     element.remove();
//   }
// }

//Imágenes de Fondo aleatorias

// const arrayImgs = [
//   "1.jpg",
//   "2.jpg",
//   "3.jpg",
//   "4.jpg",
//   "5.jpg",
//   "6.jpg",
//   "7.jpg",
//   "8.jpg",
//   "9.jpg",
//   "10.jpg",
// ];

// const cambiarFondo = () => {
//   const arrLength = arrayImgs.length;
//   let index = Math.floor(Math.random() * arrLength);
//   let img = arrayImgs[index];
//   document.body.style.backgroundImage = `url('/assets/imagenes/${img}')`;
// };
// cambiarFondo();

// setInterval(cambiarFondo, 15000);
