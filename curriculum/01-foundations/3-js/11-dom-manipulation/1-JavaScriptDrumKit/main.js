window.addEventListener('keydown', (e) => {
    console.log(e)
    // Capture the keypress with "key"
    const audio = document.querySelector(`audio[key="${e.key}"]`)
    const key = document.querySelector(`.key[key=${e.key}]`)
    if(!audio) return // stop the function from running altogether
    audio.currentTime = 0 // Make the audio play with rapid keypresses
    audio.play() // Play the audio

    // Add the class to keys
    key.classList.add('playing')
})

function removeTransition(e) {
    // console.log(e)
    if (e.propertyName !== 'transform') return

    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key')
// console.log(keys)
keys.forEach(key => key.addEventListener('transitionend', removeTransition))