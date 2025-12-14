export function initLinks() {
  const titulo = document.getElementById("titulo");
  const url = document.getElementById("url");
  const boton = document.getElementById("crear-link");
  const lista = document.getElementById("lista");
  if (!boton) return;
  let linkList = JSON.parse(localStorage.getItem("Links")) || [];
  linkList.forEach((link) => pintarLink(link));
  console.log(linkList);

  boton.addEventListener("click", () => {
    generarLink();
  });

  function generarLink() {
    let valorTitulo = titulo.value.trim();
    let valorUrl = url.value.trim();
    if (!valorTitulo) {
      console.log("Ingresa un titulo para tu link");
      return;
    } else if (!valorUrl) {
      console.log("Ingrersa una url");
      return;
    } else {
      const nuevoId = Date.now();
      const linkObj = {
        id: nuevoId,
        title: valorTitulo,
        url: valorUrl,
      };
      linkList.push(linkObj);
      localStorage.setItem("Links", JSON.stringify(linkList));
      pintarLink(linkObj);
      titulo.value = " ";
      url.value = " ";
    }
  }

  function pintarLink(nuevo) {
    const item = document.createElement("li");
    const anchor = document.createElement("a");
    const resetBtn = document.createElement("button");
    item.setAttribute("id", nuevo.id);
    anchor.setAttribute("target", "blank");
    resetBtn.innerText = "Delete";
    anchor.textContent = nuevo.title;
    anchor.href = nuevo.url;
    item.appendChild(anchor);
    item.appendChild(resetBtn);
    lista.appendChild(item);
    resetBtn.addEventListener("click", () => {
      borrarLink(item);
    });
  }

  function borrarLink(element) {
    const idABorrar = element.id;
    const index = linkList.findIndex((linkObj) => {
      return Number(linkObj.id) === Number(idABorrar);
    });
    if (index > -1) {
      linkList.splice(index, 1);
      localStorage.setItem("Links", JSON.stringify(linkList));
      console.log(linkList);
      element.remove();
    }
  }
}
