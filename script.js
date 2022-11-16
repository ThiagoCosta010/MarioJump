const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const res = document.querySelector('.res')
const btnReiniciar = document.querySelector('.btnReiniciar')

const jump = () => {
    mario.classList.add('jump')

    setTimeout(function() {
        mario.classList.remove('jump')
    }, 500)
}
const loop = setInterval( () => {

    console.log(loop)

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    if(pipePosition <= 80 && pipePosition > 0 && marioPosition <= 120){

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.setAttribute('src','img/game-over.png')
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        setInterval(() => {
            location.reload()
        },2000)
        
        setInterval(loop)
    }
}, 10)

document.addEventListener('keydown', jump)