window.addEventListener('keydown', e => {
    playSound(e.key)
    addTransition(e.key)
})

function playSound(audioKey) {
    const audio = document.querySelector(`audio[key = "${audioKey}"]`)
    if (!audio) return
    audio.currentTime = 0
    audio.play()
}

function addTransition(transitionKey) {
    const key = document.querySelector(`.key[key="${transitionKey}"]`)
    if(!key) return
    key.classList.add('playing')
    key.addEventListener('transitionend', resetTransition)
}

function resetTransition(e) {
    if(e.propertyName !== 'transform') return
    this.classList.remove('playing')
}