//Contraseñas

// ## Generador de contraseñas seguras:

const longitud = document.getElementById("longitud");
const btn = document.getElementById("generar");
const msg = document.getElementById("msg");

btn.addEventListener("click", generarContrasena);

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
function generarContrasena() {
  const valor = parseInt(longitud.value); // Usa la variable privada 'longitud'
  msg.innerHTML = ""; // Usa la variable privada 'msg'

  if (valor < 12 || valor > 50 || isNaN(valor)) {
    msg.innerText = "Por favor ingresa un número entre 12 y 50";
  } else {
    const obligatorios = camposObligados(); // Llama a la privada
    const restantes = camposRestantes(valor); // Llama a la privada
    let pass = obligatorios.concat(restantes);
    let desorden = pass.sort(() => Math.random() - 0.5);
    const tuContraseña = desorden.join("");
    msg.innerText = `Tu contraseña es: ${tuContraseña}`;
  }
}
