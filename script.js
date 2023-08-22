
window.addEventListener('scroll', () => {

    let header = document.getElementById('header')


    if(window.scrollY <= 100) {
        header.style.backgroundColor = 'rgba(53, 21, 93, 30%)'
        header.style.borderBottom = '0px'
    } else {
        header.style.transitionProperty = 'all'
        header.style.transitionDuration = '.5s'
        header.style.backgroundColor = 'rgba(53, 21, 93, 95%)'
        header.style.borderBottom = '1px solid rgba(255, 255, 255, 30%)'
    }

})


function hoverV() {

    let V = document.getElementById('tela-vendaV');
    let M = document.getElementById('tela-vendaM');
    let A = document.getElementById('tela-vendaA');

    M.style.opacity = '20%'
    M.style.transform = 'scale(0.8)'

    A.style.opacity = '20%'
    A.style.transform = 'scale(0.8)'

}
function outV() {
    let V = document.getElementById('tela-vendaV');
    let M = document.getElementById('tela-vendaM');
    let A = document.getElementById('tela-vendaA');

    M.style.opacity = ''
    M.style.transform = ''

    A.style.opacity = ''
    A.style.transform = ''
}




function hoverM() {

    let V = document.getElementById('tela-vendaV');
    let M = document.getElementById('tela-vendaM');
    let A = document.getElementById('tela-vendaA');

    V.style.opacity = '20%'
    V.style.transform = 'scale(0.8)'

    A.style.opacity = '20%'
    A.style.transform = 'scale(0.8)'
    
}

function outM() {
    let V = document.getElementById('tela-vendaV');
    let M = document.getElementById('tela-vendaM');
    let A = document.getElementById('tela-vendaA');

    V.style.opacity = ''
    V.style.transform = ''

    A.style.opacity = ''
    A.style.transform = ''
}




function hoverA() {

    let V = document.getElementById('tela-vendaV');
    let M = document.getElementById('tela-vendaM');
    let A = document.getElementById('tela-vendaA');

    M.style.opacity = '20%'
    M.style.transform = 'scale(0.8)'
    M.style.transition = '1s'

    V.style.opacity = '20%'
    V.style.transform = 'scale(0.8)'
    V.style.transition = '1s'
    
}

function outA() {
    let V = document.getElementById('tela-vendaV');
    let M = document.getElementById('tela-vendaM');
    let A = document.getElementById('tela-vendaA');

    M.style.opacity = ''
    M.style.transform = ''
    M.style.transition = ''

    V.style.opacity = ''
    V.style.transform = ''
    V.style.transition = ''
}