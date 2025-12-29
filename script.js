const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const timer = document.getElementById("timer");
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const overlay = document.getElementById("overlay");
const close = document.getElementById("close");

const startDate = new Date(2025, 10, 19, 0, 0, 0);

musicBtn.onclick = () => {
  music.play();
  musicBtn.classList.add("spin");
};

function updateTimer() {
  let diff = new Date() - startDate;
  if (diff < 0) diff = 0;

  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  timer.innerText = `A gente se conhece há ${d} dias ${h}h ${m}m ${s}s`;
}

setInterval(updateTimer, 1000);
updateTimer();

yes.onclick = () => {
  overlay.classList.add("show");
};

close.onclick = () => {
  overlay.classList.remove("show");
};

no.onmouseover = () => {
  no.style.left = Math.random() * 200 + "px";
  no.style.top = Math.random() * 60 + "px";
};
