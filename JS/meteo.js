// Este código es la versión funcional antes de ser envuelta en el Módulo Revelador (IIFE)

const API_KEY = "cf46cb2d46464bff86484316251012";
const BASE_URL = "https://api.weatherapi.com/v1/forecast.json";

function mostrarError(mensaje) {
  const errorContainer = document.getElementById("error-container");
  if (errorContainer) {
    errorContainer.textContent = `Error: ${mensaje}`;
    errorContainer.style.display = "block";
  }
}

function procesarClimaActual(ciudad, grados, estadoClima, iconoURL) {
  const ciudadElement = document.getElementById("ciudad");
  const temperaturaElement = document.getElementById("temperatura");
  const estadoElement = document.getElementById("estado-clima");
  const iconoElement = document.getElementById("icono-clima");

  if (ciudadElement) ciudadElement.textContent = ciudad;
  if (temperaturaElement) temperaturaElement.textContent = `${grados}°C`;
  if (estadoElement) estadoElement.textContent = estadoClima;
  iconoElement.src = `https:${iconoURL}`;
}

function obtenerCoordenadas() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      },
      (error) => {
        reject(new Error("Geolocalización denegada o fallida."));
      }
    );
  });
}

async function obtenerDatosClima(url) {
  const respuesta = await fetch(url);

  if (!respuesta.ok) {
    throw new Error(
      `Error HTTP ${respuesta.status}. Verifique la URL/API Key.`
    );
  }

  return respuesta.json();
}

function procesarPrevision(previsionHoraria) {
  return previsionHoraria.map(({ temp_c, condition: { text, icon } }) => {
    const iconoUrlCompleta = `https:${icon}`;

    return `<div class="hora-item">
        <img src="${iconoUrlCompleta}" alt="${text}"> 
        <span class="temp">${temp_c}°C</span>
    </div>`;
  });
}

async function obtenerClimaCompleto() {
  try {
    const coordenadas = await obtenerCoordenadas();
    const urlPeticion = `${BASE_URL}?key=${API_KEY}&q=${coordenadas.lat},${coordenadas.lon}&aqi=no`;
    const datosJSON = await obtenerDatosClima(urlPeticion);

    const {
      location: { name: ciudad },
      current: {
        temp_c: grados,
        condition: { text: estadoClima, icon: iconoURL },
      },
      forecast: {
        forecastday: [{ hour: previsionHoraria }],
      },
    } = datosJSON;

    const previsionHorariaHTML = procesarPrevision(previsionHoraria).join("");

    procesarClimaActual(ciudad, grados, estadoClima, iconoURL);

    // Usamos el ID de contenedor que definimos: pronostico-horario
    const contenedorPrevision = document.getElementById("pronostico-horario");

    if (contenedorPrevision) {
      contenedorPrevision.innerHTML = previsionHorariaHTML;
    }
  } catch (error) {
    mostrarError(error.message);
  }
}

// Esta línea iniciaría la aplicación si no estuviera modularizada
// obtenerClimaCompleto();
