const toggleButton = document.getElementById('toggle');
const overlay = document.getElementById('overlay');

toggleButton.addEventListener('click', () => {
    overlay.classList.toggle('open');
});
