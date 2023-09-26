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

function change(list)
{
    var val=list.options[list.selectedIndex].value;
    document.body.style.color=val;
}

let txtclr = document.getElementById("selectColor");
txtclr.addEventListener("input", () => {
    document.body.style.color = txtclr.value;
})

let selectDate = document.getElementById("datetime");
selectDate.addEventListener("input", () => {
    console.log(selectDate.value);
})