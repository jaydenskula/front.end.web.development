var animation = anime.timeline({
    autoplay: false
});

animation
.add({
    targets: '#btn',
    top: '100px',
    duration: 500,
    easing: 'easeInOutSine'
})

document.querySelector('#btn').onclick = animation.play;