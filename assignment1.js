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

function revert()
{
    hover.style.color = "black";
}

let hover = document.querySelector(".hover");
hover.addEventListener("mouseover", changeColor);
hover.addEventListener("mouseout", revert);
