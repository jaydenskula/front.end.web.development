var start = anime.timeline({
    autoplay: false
});

start
.add({
    targets: '#start',
    top: '-100%',
    duration: 1000,
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
    targets: '#foreground_night',
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


let gameText = document.querySelector('#text');


function fireText()
{
    gameText.textContent = "You light a fire";
}

let fire = document.querySelector('#fire');
fire.addEventListener("click", fireText);


var lightFire = anime.timeline ({
    autoplay: false
});

lightFire
.add({
    targets: '#firepit',
    bottom: '0px',
    easing: 'linear'
})

.add({
    targets: '#flames_1',
    rotate: '1turn',
    loop: true
})

.add({
    targets: '#flames_2',
    bottom: '0px',
    duration: 200,
    easing: 'linear'
})

.add({
    targets: '#flames_3',
    bottom: '0px',
    duration: 200,
    easing: 'linear',
})

.add({
    targets: '#flames_4',
    bottom: '0px',
    duration: 200,
    easing: 'linear'
})

.add({
    targets: '#flames_5',
    bottom: '0px',
    duration: 200,
    easing: 'linear'
})

.add({
    targets: '#sleep',
    top: '60%',
    duration: 1000,
    easing: 'linear'
})

document.querySelector('#fire').onclick = lightFire.play;

function sleepText()
{
    gameText.textContent = "You go to sleep and wake up the next morning. The sun is shining."
    document.body.style.background = "#B8FFFB";

    let sleepButton = document.getElementById('sleep');
    sleepButton.textContent = "Replay";
}

let dayText = document.getElementById('sleep');
dayText.addEventListener("click", sleepText);

var sleep = anime.timeline({
    autoplay: false
});

sleep
.add({
    targets: '#stars',
    top: '-100%',
    duration: 100,
    easing: 'linear'
})

.add({
    targets: '#mountains_day',
    bottom: '0px',
    duration: 1000,
    easing: 'linear'
})

.add({
    targets: '#foreground_day',
    bottom: '0px',
    duration: 1000,
    easing: 'linear'
})

.add({
    targets: '#sun',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})

document.getElementById('sleep').onclick = sleep.play;