const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump')
    setTimeout(() => {
        mario.classList.remove('jump')
    }, 500)
}
const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    console.log(loop)
    if(pipePosition > 0 && pipePosition <= 120 && marioPosition < 80){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`

        mario.setAttribute('src', 'img/game-over.png')
        mario.style.width = '75px'
        mario.style.marginLeft = '50px'

        setTimeout(() => {
            location.reload()
        }, 2000)
    }
    setInterval(loop)
}, 10)
document.addEventListener('keydown', jump)
