const gustos = [
  "Tu risa, que siempre me hace sonreír",
  "Tu cara preciosa, sobre todo cuando no te das cuenta",
  "Lo perseverante que eres, nunca te rindes",
  "Tu forma de coquetear, que siempre me hace reír",
  "Lo fuerte que eres, incluso cuando todo parece difícil ",
  "Tu culazo (no podía no decirlo)",
  "Tu amabilidad, siempre pensando en los demás",
  "Incluso cuando te pones brava, sigues siendo increíble"
];

const lista = document.getElementById("gustos-lista");
const btnAgregar = document.getElementById("btnAgregar");

function mostrarGustos() {
  lista.innerHTML = "";
  gustos.forEach((gusto) => {
    const div = document.createElement("div");
    div.classList.add("gusto");
    div.textContent = gusto;
    lista.appendChild(div);
  });
}

mostrarGustos();

btnAgregar.addEventListener("click", () => {
  const nuevo = prompt("💭 Escribe algo más que te encante de ella:");
  if (nuevo && nuevo.trim() !== "") {
    gustos.push(nuevo.trim());
    mostrarGustos();
  }
});