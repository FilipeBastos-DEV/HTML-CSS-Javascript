const colors = ['blue', 'Red', 'Yellow', 'Purple', 'Black','Green'];
btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    const randomColors = getRandomColors();
    document.body.style.background = colors[randomColors];
    color.textContent = colors[randomColors];
})

function getRandomColors() {
    return Math.floor( Math.random() * colors.length);
}