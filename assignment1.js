let event1 = document.querySelector(".css-thru-js");
event1.style.color = "red";
event1.style.backgroundColor = "blue";

function changeButton()
{
    button.textContent = "Hello! This text change is through JS";
}

let button = document.querySelector(".button");
button.addEventListener("click", changeButton);

function changeColor()
{
    hover.style.color = "blue";
}

let hover = document.querySelector(".hover");
button.addEventListener("mouseover", changeColor);