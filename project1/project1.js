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
    targets: '#fire',
    top: '60%',
    duration: 1000,
    easing: 'easeInOutSine'
})

.add({
    targets: '#extinguishFire',
    top: '55%',
    duration: 1000,
    easing: 'easeInOutSine'
})

document.querySelector('#fire').onclick = lightFire.play;

var extinguishFire = anime.timeline ({
    autoplay: false
});

var dayTime = anime.timeline({
    autoplay: false
});

var nightTime = anime.timeline({
    autoplay: false
})
