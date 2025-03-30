const botao = document.getElementById('botao')
const imgLampada = document.getElementById('imagem')
const papelDeParede = document.getElementById('fundo')
const span = document.querySelector('span')
const titulo = document.querySelector('h1')

// LAMPADA DESLIGA E LIGA
const desligar = () => {
    if (!lamapadaOff()) {
        imgLampada.src = 'img/apagada.png'
        papelDeParede.style.background = 'black'
        span.style.color = 'yellow'
        titulo.style.color = 'white'
    }
}

const ligar = () => {
    if (!lamapadaOff()) {
        imgLampada.src = 'img/ligada.png'
        papelDeParede.style.backgroundImage = 'radial-gradient(circle, rgba(254, 219, 25, 1) 54%, rgba(254, 251, 155, 1) 68%, rgba(0, 0, 0, 0.5102415966386555) 81%)'
        span.style.color = 'rgba(19, 19, 9, 0.479)'
        titulo.style.color = 'black'
    }
}

const OnOf = () => {
    if (botao.textContent == 'Ligar') {
        ligar()
        botao.innerText = 'Desligar'
    } else {
        desligar()
        botao.innerText = 'Ligar'
    }
}

// LAMPADA HOVER ON OF
const hoverOn = () => {
    if (!lamapadaOff()) {
        imgLampada.src = 'img/ligada.png'
        papelDeParede.style.backgroundImage = 'radial-gradient(circle, rgba(254, 219, 25, 1) 54%, rgba(254, 251, 155, 1) 68%, rgba(0, 0, 0, 0.5102415966386555) 81%)'
        span.style.color = 'rgba(19, 19, 9, 0.479)'
        titulo.style.color = 'black'
    }
}

const hoverOf = () => {
    if (!lamapadaOff()) {
        imgLampada.src = 'img/apagada.png'
        papelDeParede.style.background = 'black'
        span.style.color = 'yellow'
        titulo.style.color = 'white'
    }
}

// LAMPADA QUEBRADA
const dobleclik = () => {
    imgLampada.src = 'img/quebrada.png'
    papelDeParede.style.background = 'black'
    span.style.color = 'yellow'
    titulo.style.color = 'white'
}

const lamapadaOff = () => {
    return imgLampada.src.indexOf('quebrada') > -1
}


botao.addEventListener('click', OnOf)
imgLampada.addEventListener('click', desligar)
imgLampada.addEventListener('click', ligar)
