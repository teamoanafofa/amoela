const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const timer = document.getElementById("timer");
const overlay = document.getElementById("overlay");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const closeBtn = document.getElementById("closeBtn");

const startDate = new Date(2025, 10, 19, 0, 0, 0);

musicBtn.addEventListener("click", () => {
  music.play();
  musicBtn.classList.remove("spinning");
  void musicBtn.offsetWidth;
  musicBtn.classList.add("spinning");
});

function updateTimer() {
  let diff = new Date() - startDate;
  if (diff < 0) diff = 0;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  timer.textContent = `A gente se conhece há ${d} dias, ${h}h ${m}m ${s}s`;
}

setInterval(updateTimer, 1000);
updateTimer();

yesBtn.addEventListener("click", () => {
  overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("show");
});

noBtn.addEventListener("mouseover", () => {
  noBtn.style.left = Math.random() * (window.innerWidth - noBtn.offsetWidth) + "px";
  noBtn.style.top = Math.random() * (window.innerHeight - noBtn.offsetHeight) + "px";
});

setInterval(() => {
  const heart = document.createElement("span");
  heart.textContent = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 25 + 15 + "px";
  document.querySelector(".hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);
