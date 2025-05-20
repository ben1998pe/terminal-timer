const display = document.getElementById("display");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

let interval;
let totalSeconds = 0;

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, "0");
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

function startTimer() {
  totalSeconds = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
  if (isNaN(totalSeconds) || totalSeconds <= 0) return;

  clearInterval(interval);
  interval = setInterval(() => {
    if (totalSeconds <= 0) {
      clearInterval(interval);
      display.textContent = "⏰ ¡Tiempo!";
      alert("¡Se acabó el tiempo!");
      return;
    }
    totalSeconds--;
    display.textContent = formatTime(totalSeconds);
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  totalSeconds = parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);
  display.textContent = formatTime(totalSeconds);
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

// Inicializa la pantalla con el valor por defecto
resetTimer();
