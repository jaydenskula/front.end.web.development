function checkGuess()
{
    alert(userGuess.value);
}

let guessButton = document.querySelector(".guessSubmit");
let userGuess = document.querySelector(".guessField");
guessButton.addEventListener("click", checkGuess);

function checkDate()
{
    alert("Thanks for submitting a date");
}

let dateButton = document.querySelector(".dateSubmit");
let dateInput = document.querySelector(".datetime");
dateButton.addEventListener("click", checkDate);

const usernameInput = document.getElementById('username');
usernameInput.addEventListener('input', () => {
  console.log(usernameInput.value);
});

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const data = new FormData(form);
  console.log(data.get('username'));
  console.log(data.get('password'));
});