// =====================
// BOTÃO TOCAR MÚSICA
// =====================
const music = document.getElementById("music");
const playBtn = document.getElementById("playMusic");

playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.display = "none";
});

// =====================
// BOTÃO "NÃO" FUGINDO
// =====================
const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

  noButton.style.position = "absolute";
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// =====================
// TROCA DE TELAS
// =====================
function showTimer() {
  document.getElementById("page-love").classList.add("hidden");
  document.getElementById("page-timer").classList.remove("hidden");
}

function showLove() {
  document.getElementById("page-timer").classList.add("hidden");
  document.getElementById("page-love").classList.remove("hidden");
}

// =====================
// CRONÔMETRO
// 🔴 EDITE A DATA AQUI
// =====================
const startDate = new Date(2024, 0, 1, 0, 0, 0);

function updateTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").innerHTML =
    `${days} dias, ${hours} horas, ${minutes} minutos e ${seconds} segundos 💖`;
}

setInterval(updateTimer, 1000);
updateTimer();

// =====================
// 💕 CORAÇÕES CAINDO
// =====================
const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart-fall";
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 15 + "px";
  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 300);
