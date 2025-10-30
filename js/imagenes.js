let noCount = 0;
let loveSize = 1; // tamaño actual del botón “Sí te amo”
let noSize = 1; // tamaño actual del botón “No te amo”

const mensajesNo = [
  "¿Segura? 😢",
  "Ay... eso dolió un poquito 💔",
  "Vamos, no mientas... sé que me amas 😏",
  "Ya, no juegues conmigo 🥺",
  "Voy a llorar 😭",
  "Si no me amas me ire con el Palas 😤",
  "Era mentira, jamás te dejaría 😘",
  "Está bien... pero igual te amo 💘",
];

const imagenesNo = [
  "imagenes/kitty-smile.gif",
  "imagenes/cat-kitten.gif",
  "imagenes/michi-michillio.gif",
  "imagenes/cat-crying-cat.gif",
  "imagenes/210f0a8cc74bbd9f8be4c5def6ecced6.gif",
  "imagenes/200w.gif",
  "imagenes/caca-cat-smile.gif",
  "imagenes/sad-sad-cat.gif",
];

function noMeAmas() {
  const img = document.getElementById("mainImage");
  const pregunta = document.getElementById("pregunta");
  const card = document.querySelector(".love-card");
  const btnSi = document.getElementById("btnSi");
  const btnNo = document.getElementById("btnNo");

  // Cambiar imagen y texto
  img.classList.add("fade");
  setTimeout(() => {
    img.src = imagenesNo[noCount % imagenesNo.length];
    pregunta.textContent = mensajesNo[noCount % mensajesNo.length];
    img.classList.remove("fade");

    // Cambiar fondo dinámicamente
    card.style.background = `rgba(255, ${150 + ((noCount * 20) % 100)}, ${
      180 - ((noCount * 10) % 80)
    }, 0.25)`;

    noCount++;
  }, 400);

  // Agrandar el botón “Te amo”
  loveSize += 0.15;
  btnSi.style.transform = `scale(${loveSize})`;
  btnSi.style.transition = "transform 0.3s ease";

  // Hacer más pequeño el botón “No te amo”
  noSize -= 0.1;
  if (noSize < 0.3) noSize = 0.3; // límite mínimo
  btnNo.style.transform = `scale(${noSize})`;
  btnNo.style.transition = "transform 0.3s ease";
}

function meAmas() {
  const pregunta = document.getElementById("pregunta");
  const img = document.getElementById("mainImage");
  const btnSi = document.getElementById("btnSi");
  const btnNo = document.getElementById("btnNo");

  pregunta.innerHTML = "¡Sabía que sí me amabas! 💞🥰 Pero igual yo te amo muchísimo más, mi vida. 💖";
  img.classList.add("fade");

  setTimeout(() => {
    img.src = "imagenes/cat-kiss.gif";
    img.classList.remove("fade");
  }, 400);

  // Resetear tamaños de ambos botones
  loveSize = 1;
  noSize = 1;
  btnSi.style.transform = "scale(1)";
  btnNo.style.transform = "scale(1)";

  // Lluvia de corazones
  for (let i = 0; i < 15; i++) {
    crearCorazon();
  }
}

function crearCorazon() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.textContent = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

// corazones CSS dinámicos
const style = document.createElement("style");
style.textContent = `
.floating-heart {
  position: fixed;
  bottom: -20px;
  font-size: 1.5rem;
  animation: riseHeart linear forwards;
  z-index: 1000;
}
@keyframes riseHeart {
  0% { transform: translateY(0) scale(1); opacity: 1; }
  100% { transform: translateY(-100vh) scale(1.6); opacity: 0; }
}
`;
document.head.appendChild(style);
