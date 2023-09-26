function checkGuess()
{
    alert(userGuess.value);
}

let guessButton = document.querySelector(".guessSubmit");
let userGuess = document.querySelector(".guessField");
guessButton.addEventListener("click", checkGuess);

let bgclr = document.getElementById("color");
bgclr.addEventListener("input", () => {
    document.body.style.backgroundColor = bgclr.value;
})