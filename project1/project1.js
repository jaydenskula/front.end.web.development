var start = anime.timeline({
    autoplay: false
});

start
.add({
    targets: '#start',
    top: '-100%',
    duration: 500,
    easing: 'easeInOutSine'
})

.add({
    targets: '#stars',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#mountains_night',
    bottom: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#moon',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#fire',
    top: '55%',
    duration: 1000,
    easing: 'easeInOutSine'
})

document.querySelector('#start').onclick = start.play;


let gameText = document.querySelector('#game_text');


function fireText()
{
    gameText.textContent = "You light a fire";
}

let fire = document.querySelector('#fire');
fire.addEventListener("click", fireText);


var action1 = anime.timeline ({
    autoplay: false
});

action1
.add({
    targets: '#fire',
    top: '101%',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#sleep',
    top: '55%',
    duration: 1000,
    easing: 'easeInOutSine'
})

document.querySelector('#fire').onclick = action1.play;


function sleepText()
{
    gameText.textContent = "You go to sleep. You wake up next morning. The sun is shining."
}

let sleep = document.querySelector('#sleep');
sleep.addEventListener("click", sleepText);


function exploreText()
{
    gameText.textContent = "You go exploring."
}

let explore = document.querySelector('#explore');
explore.addEventListener("click", exploreText);


function huntText()
{
    gameText.textContent = "You go hunting. You collect 1 bit of meat."
}

let hunt = document.querySelector('#hunt');
hunt.addEventListener("click", huntText);


var action2 = anime.timeline ({
    autoplay: false
});

action2
.add({
    targets: '#sleep',
    top: '101%',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#explore',
    top: '55%',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#hunt',
    top: '60%',
    duration: 1000,
    easing: 'easeInOutSine'
})