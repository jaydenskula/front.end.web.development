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