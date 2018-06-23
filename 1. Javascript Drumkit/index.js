window.addEventListener('keydown', (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const button = document.querySelector(`.button[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 1;
    audio.play();
    button.classList.add('clicked');

});

const removeTransition = (e) => {
    if (e.propertyName !== 'transform') {
       return;
    }
    e.target.classList.remove('clicked');
}

const keys = document.querySelectorAll('.button');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

