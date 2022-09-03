// *The keydown event triggers two actions and pass the 'key' as the argument
window.addEventListener('keydown', e => {
    playSound(e.key)
    addTransition(e.key)
})

function playSound(audioKey) {
    // *The argument is used to identify the specific 'key' property of the 'audio' tag and assign it to the variable 'audio'
    const audio = document.querySelector(`audio[key = "${audioKey}"]`)
    if (!audio) return // avoid the browser from throwing the 'TypeError' when a key, other than the 9 assigned keys, is pressed
    audio.currentTime = 0 // by setting the 'currentTime' to 0 the audio can be played with rapid key presses without any delay
    audio.play()
}

function addTransition(transitionKey) {
    const key = document.querySelector(`.key[key="${transitionKey}"]`)
    if (!key) return // same as "if(!audio) return" line
    key.classList.add('playing')
    // *In addition to adding the 'playing' class to the element which contains the "transition" property, this function triggers the resetTransition function
    key.addEventListener('transitionend', resetTransition)
}

function resetTransition(e) {
    if (e.propertyName !== 'transform') return // checks whether the triggered event has the property "transform" ~~it seems a bit redundant though, maybe if the "playing" class doesn't contain a transition property~~ BUT it only gets triggered with the 'transitionend' event. hmm I will keep this for now.
    this.classList.remove('playing')
}