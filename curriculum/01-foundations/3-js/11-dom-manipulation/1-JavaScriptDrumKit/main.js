window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return // stop the function from running altogether
    audio.currentTime = 0
    audio.play()
    console.log(audio)
})