const message = `💗 Mi amor,

Con el paso del tiempo me doy cuenta de lo maravillosa y fuerte que eres: sensible, amable, amorosa, tierna, coqueta, trabajadora... en fin, un amor de persona, exactamente lo que siempre buscaba.

Estoy muy feliz de haberte encontrado después de tanto tiempo, y me alegra profundamente que me hayas correspondido. Amor, mi propósito sigue en pie: hacerte la mujer más feliz del mundo.
Aun con nuestros altos y bajos, con dinero o sin él, quiero que vivas alegremente, sin cargas, o al menos con la tranquilidad de saber que siempre estaré aquí para ayudarte a llevarlas.

Eres una excelente mujer, y me siento inmensamente orgulloso de mi princesa. Sé que lograrás cosas grandes si sigues siendo como eres, y quiero que tengas presente que siempre estaré a tu lado, apoyándote y motivándote a seguir adelante.

Te amo mucho, mi chiquita. Realmente quiero compartir mi vida contigo, en cada paso, en cada risa y en cada sueño.

Con todo mi amor,
Nicolás Astudillo 💞`;

const typedEl = document.getElementById("typed");
const cursor = document.getElementById("cursor");

function typeMsg(txt) {
  let i = 0;
  function step() {
    if (i >= txt.length) {
      cursor.style.display = "none";
      return;
    }
    typedEl.textContent += txt[i++];
    setTimeout(step, txt[i - 1] === "\n" ? 200 : 35);
  }
  step();
}
window.addEventListener("load", () => typeMsg(message));

// Corazones
const hearts = document.getElementById("hearts");
function spawnHeart() {
  const i = document.createElement("i");
  const s = 14 + Math.random() * 30;
  i.style.width = s + "px";
  i.style.height = s + "px";
  i.style.left = 5 + Math.random() * 90 + "%";
  const d = 4 + Math.random() * 5;
  const del = Math.random() * 2;
  i.style.animationDuration = d + "s";
  i.style.animationDelay = del + "s";
  i.innerHTML = `<svg viewBox="0 0 24 24" fill="#ff9ec1">
  <path d="M12 21s-7.5-4.9-10-8.1C-0.2 7.7 4.2 3 8.7 5.1 10.5 6 12 7.6 12 7.6s1.5-1.6 3.3-2.5C19.8 3 24.2 7.7 22 12.9 19.5 16.1 12 21 12 21z"/></svg>`;
  hearts.appendChild(i);
  setTimeout(() => i.remove(), 12000);
}
setInterval(() => {
  if (Math.random() < 0.7) spawnHeart();
}, 600);

// My Melody flotantes
const melodys = document.getElementById("melodys");
function spawnMelody() {
  const img = document.createElement("img");
  const size = 50 + Math.random() * 40;
  img.src = "imagenes/My_melody.png";
  img.style.width = size + "px";
  img.style.left = Math.random() * 90 + "%";
  img.style.animationDuration = 8 + Math.random() * 6 + "s";
  img.style.animationDelay = Math.random() * 3 + "s";
  melodys.appendChild(img);
  setTimeout(() => img.remove(), 14000);
}
setInterval(() => {
  if (Math.random() < 0.4) spawnMelody();
}, 1500);
