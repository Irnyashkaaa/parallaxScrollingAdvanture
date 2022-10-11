const width = window.innerWidth
const height = window.innerHeight

let text = document.getElementById('text')
let bird1 = document.getElementById('bird1')
let bird2 = document.getElementById('bird2')
let forest = document.getElementById('forest')
let rocks = document.getElementById('rocks')
let water = document.getElementById('water')

let earth = document.getElementById('planet_earth')
let planet_mid = document.getElementById('planet_mid')
let planet_foreground = document.getElementById('planet_foreground')
window.addEventListener('scroll', function () {
    let value = window.scrollY;

    if (bird1) {

        text.style.top = 50 + value * -0.3 + '%'
        bird1.style.top = value * -1.5 + 'px'
        bird1.style.left = value * 2 + 'px'
        bird2.style.top = value * -0.5 + 'px'
        bird2.style.left = value * -3.5 + 'px'

        forest.style.top = value * 0.1 + 'px'
    } 

})


window.addEventListener('mousemove', (e) => {
    if (earth) {
        earth.style.top = e.y * 0.06 + 'px'
        earth.style.left = e.x * 0.03 + width / 2 - earth.naturalWidth / 10 + 'px'
        planet_mid.style.top = e.y * 0.01 + 'px'
        planet_foreground.style.top = e.y * 0.005 + 'px'
    }

})