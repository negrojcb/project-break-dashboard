//Reloj

const relojContainer = document.getElementById("reloj-container");
const fechaContainer = document.getElementById("fecha-container");
const fraseContainer = document.getElementById("frase-container");

var intervalID = setInterval(myCallback, 1000);

function myCallback() {
  const date = new Date();
  const horas = date.getHours();
  const minutos = date.getMinutes();
  const segundos = date.getSeconds();
  const horasFormateadas = horas < 10 ? "0" + horas : horas;
  const minutosFormateados = minutos < 10 ? "0" + minutos : minutos;
  const segundosFormateados = segundos < 10 ? "0" + segundos : segundos;
  const horaFormateada = `${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
  relojContainer.innerText = horaFormateada;
  mostrarFrase(horas, minutos);
  actualizarFecha(date);
}

//FRASE SEGUN LA HORA

const mostrarFrase = (h, m) => {
  let t = h * 60 + m;
  if (t >= 0 && t <= 420) {
    fraseContainer.innerText = " Es hora de descansar. Apaga y sigue mañana";
  } else if (t > 420 && t <= 720) {
    fraseContainer.innerText =
      "Buenos días, desayuna fuerte y a darle al código";
  } else if (t > 720 && t <= 840) {
    fraseContainer.innerText = "Echa un rato más pero no olvides comer";
  } else if (t > 840 && t <= 960) {
    fraseContainer.innerText = "Espero que hayas comido";
  } else if (t > 960 && t <= 1080) {
    fraseContainer.innerText = "Buenas tardes, el último empujón";
  } else if (t > 1080 && t <= 1320) {
    fraseContainer.innerText =
      "Esto ya son horas extras, ... piensa en parar pronto";
  } else {
    fraseContainer.innerText =
      " Buenas noches, es hora de pensar en parar y descansar";
  }
};

const actualizarFecha = (d) => {
  const dia = d.getDate();
  const mes = d.getMonth() + 1;
  const año = d.getFullYear();
  const diaFormateado = dia < 10 ? "0" + dia : dia;
  const mesFormateado = mes < 10 ? "0" + mes : mes;
  const fechaFormateada = `${diaFormateado}/${mesFormateado}/${año}`;
  fechaContainer.innerText = fechaFormateada;
};
