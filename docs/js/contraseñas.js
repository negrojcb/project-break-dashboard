export function initPass() {
  const longitud = document.getElementById("longitud");
  const btn = document.getElementById("generar");
  const msg = document.getElementById("msg");
  if (!longitud || !btn || !msg) return;
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
    const valor = parseInt(longitud.value);
    msg.innerHTML = "";

    if (valor < 12 || valor > 50 || isNaN(valor)) {
      msg.innerText = "Por favor ingresa un número entre 12 y 50";
    } else {
      const obligatorios = camposObligados();
      const restantes = camposRestantes(valor);
      let pass = obligatorios.concat(restantes);
      let desorden = pass.sort(() => Math.random() - 0.5);
      const tuContraseña = desorden.join("");
      msg.innerText = `Tu contraseña es: ${tuContraseña}`;
    }
  }
}
