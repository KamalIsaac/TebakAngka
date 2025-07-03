let angkaRandom = Math.floor(Math.random() * 100) + 1;
let percobaan = 0;
let maxPercobaan = 10;
let history = [];

const input = document.getElementById(`guessInput`);
const message = document.getElementById(`message`);
const historyText = document.getElementById(`history`);
const attempts = document.getElementById(`attempts`);
const resetBtn = document.getElementById(`resetBtn`);
const submitBtn = document.getElementById(`submitBtn`);

submitBtn.addEventListener(`click`, checkGuess);
resetBtn.addEventListener(`click`, resetGame);

function checkGuess() {
  const guess = Number(input.value);
  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Masukan angka antara 1 hingga 100!";
    message.className = `lose`;
    return;
  }

  percobaan++;
  history.push(guess);
  attempts.textContent = `Percobaan: ${percobaan} / ${maxPercobaan}`;
  historyText.textContent = "Tebakan: " + history.join(`, `);

  if (guess === angkaRandom) {
    message.textContent = "Selamat! kamu menebak angka yang benar!";
    message.className = `win`;
    endGame();
  } else if (percobaan >= maxPercobaan) {
    message.textContent = `Kamu kalah. Jawabannya : ${angkaRandom}`;
    message.className = `lose`;
    endGame();
  } else if (guess < angkaRandom) {
    message.textContent = "Terlalu rendah! Coba lagi.";
    message.className = `lose`;
  } else {
    message.textContent = "Terlalu tinggi! Coba lagi.";
    message.className = `lose`;
  }

  input.value = ``;
  input.focus();
}

function endGame() {
  input.disabled = true;
  submitBtn.disabled = true;
  resetBtn.style.display = `inline-block`;
}

function resetGame() {
  angkaRandom = Math.floor(Math.random() * 100) + 1;
  percobaan = 0;
  history = [];
  input.disabled = false;
  submitBtn.disabled = false;
  message.textContent = ``;
  message.className = ``;
  historyText.textContent = ``;
  attempts.textContent = `Percobaan: 0 / ${maxPercobaan}`;
  input.value = ``;
  resetBtn.style.display = `none`;
}
