
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



////////////////////////////////////////////////////////////////////////

function fundo1() {
    let fundo = document.querySelectorAll('.gradient-bg')
    let fundoTodos = document.querySelectorAll('.bg');
    let divToda = document.querySelector('.divtoda');

    let gradient0 = document.querySelectorAll('.gradient-bg0')
    
    fundo.forEach(fundo => {
        fundo.style.height = '0px'
    });

    divToda.style.backgroundImage = ''
    fundoTodos.forEach(fundo => {
        fundo.style.backgroundColor = ''
    });

    gradient0.forEach(gradient0 => {
    gradient0.style.backgroundImage = 'linear-gradient(#749BC2, #749BC2)'
    });

}

function fundo2() {
    let fundo = document.querySelectorAll('.gradient-bg')
    let fundoTodos = document.querySelectorAll('.bg');
    let divToda = document.querySelector('.divtoda');

    let gradient0 = document.querySelectorAll('.gradient-bg0')
    let gradient1 = document.querySelectorAll('.gradient-bg1')
    let gradient2 = document.querySelectorAll('.gradient-bg2')
    let gradient3 = document.querySelectorAll('.gradient-bg3')
    let gradient4 = document.querySelectorAll('.gradient-bg4')

    fundo.forEach(fundo => {
        fundo.style.height = '175px'
    });

    gradient0.forEach(gradient0 => {
        gradient0.style.backgroundImage = 'linear-gradient(#749BC2, #749BC2)'
        });

    gradient1.forEach(gradient1 => {
    gradient1.style.backgroundImage = 'linear-gradient(#749BC2, rgb(108, 98, 204))'
    });

    gradient2.forEach(gradient2 => {
    gradient2.style.backgroundImage = 'linear-gradient(rgb(108, 98, 204), #749BC2)'
    });
    
    gradient3.forEach(gradient3 => {
    gradient3.style.backgroundImage = 'linear-gradient(rgb(108, 98, 204), rgb(0, 0, 128))'
    });

    gradient4.forEach(gradient4 => {
    gradient4.style.backgroundImage = 'linear-gradient(rgb(0, 0, 128), rgb(53, 21, 93))'
    });

    divToda.style.backgroundColor = ''

    fundoTodos.forEach(fundo => {
        fundo.style.backgroundColor = ''
      });

}

function fundo3() {
    let fundo = document.querySelectorAll('.gradient-bg');
    let fundo2 = document.querySelector('.gradientbg');
    let fundoTodos = document.querySelectorAll('.bg');
    let divToda = document.querySelector('.divtoda');

    fundo2.style.backgroundImage = 'none'

    fundoTodos.forEach(fundo => {
        fundo.style.backgroundColor = 'transparent'
      });

    fundo.forEach(fundo => {
        fundo.style.height = '0px'
      });

      divToda.style.backgroundImage = 'linear-gradient(rgb(0, 150, 255), rgb(0, 0, 128))'

}

function fundo4() {
    let fundo = document.querySelectorAll('.gradient-bg');
    let fundo2 = document.querySelector('.gradientbg');
    let fundoTodos = document.querySelectorAll('.bg');
    let divToda = document.querySelector('.divtoda');

    fundo2.style.backgroundImage = 'none'

    fundoTodos.forEach(fundo => {
        fundo.style.backgroundColor = 'transparent'
      });

    fundo.forEach(fundo => {
        fundo.style.height = '175px'
        fundo.style.backgroundImage = 'none'
      });

      divToda.style.backgroundImage = 'linear-gradient(rgb(0, 150, 255), rgb(0, 0, 128))'

}

function gradientBG() {

let gradientBG = document.querySelectorAll('.gradient-bg')
let gbgPlanos = document.getElementById('gbg-planos') || document.getElementById('planos')

let gradient1 = document.querySelectorAll('.gradient-bg1')
let gradient2 = document.querySelectorAll('.gradient-bg2')

if(parseInt(gbgPlanos.style.height) > 1) {
    gradientBG.forEach(elmn => {
        elmn.style.alignItems = 'flex-end'
    });

    gradient1.forEach(elmn => {
        elmn.style.height = '50px'
    });
    gradient2.forEach(elmn => {
        elmn.style.height = '50px'
    });

} else {
    gradientBG.forEach(elmn => {
        elmn.style.alignItems = 'flex-start'
    });
}

}

function loopFunction(delay, callback){
    var loop = function(){
        callback();
        setTimeout(loop, delay);
    }; loop();
};

loopFunction(1, gradientBG)

