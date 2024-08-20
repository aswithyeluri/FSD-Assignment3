const container = document.getElementById('container');
const button = document.getElementById('toggleButton');

let toggled = false;

button.addEventListener('click', () => {
    if (!toggled) {
        container.style.backgroundColor = '#e74c3c';
        container.textContent = 'Changed';
        // button.textContent = 'Change';
        button.style.backgroundColor = '#c0392b';
    } else {
        container.style.backgroundColor = '#3498db';
        container.textContent = 'Initial';
        // button.textContent = 'Change';
        button.style.backgroundColor = '#c0392b';
    }
    toggled = !toggled;
});