let angkaRandom = Math.floor(Math.random() * 100) + 1;
let percobaan = [];

function checkGuess() {
  const input = document.getElementById(`guessInput`);
  const guess = Number(input.value);
  const message = document.getElementById(`message`);
  const history = document.getElementById(`history`);

  if (!guess || guess < 1 || guess > 100) {
    message.textContent = "Masukan angka antara 1 hingga 100!";
  }
  percobaan.push(guess);
  history.textContent = "Tebakan sebelumnya: " + percobaan.join(`, `);

  if (guess === angkaRandom) {
    message.textContent = "Selamat! kamu menebak angka yang benar!";
  } else if (guess < angkaRandom) {
    message.textContent = "Terlalu rendah! Coba lagi.";
  } else {
    message.textContent = "Terlalu tinggi! Coba lagi.";
  }

  input.value = "";
}

function resetGame() {
  angkaRandom = Math.floor(Math.random() * 100) + 1;
  percobaan = [];
  document.getElementById(`message`).textContent = "";
  document.getElementById(`history`).textContent = "";
  document.getElementById(`guessInput`).value = "";
}
