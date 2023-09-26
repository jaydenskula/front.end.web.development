function checkGuess()
{
    alert(userGuess.value);
}

let guessButton = document.querySelector(".guessSubmit");
let userGuess = document.querySelector(".guessField");
guessButton.addEventListener("click", checkGuess);

const btn = document.querySelector('button');
let form = document.querySelector('form');

btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      form.style.backgroundColor = "black";
      form.style.color = "white";
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      form.style.backgroundColor = "white";
      form.style.color = "black";
    }
  });