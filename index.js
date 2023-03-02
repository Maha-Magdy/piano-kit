const playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('play');
}

window.addEventListener('keydown', playSound);

const removeTransitionClass = (e) => {
    if (e.propertyName !== 'box-shadow') return;
    console.log(e.target);
    e.target.classList.remove('play');
}

keys = document.querySelectorAll('.piano-ele');
keys.forEach(key => addEventListener('transitionend', removeTransitionClass));
