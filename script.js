
window.addEventListener('scroll', () => {

    let header = document.getElementById('header')


    if(window.scrollY <= 100) {
        header.style.backgroundColor = 'rgba(53, 21, 93, 30%)'
    } else {
        header.style.transitionProperty = 'all'
        header.style.transitionDuration = '.5s'
        header.style.backgroundColor = 'rgba(53, 21, 93, 95%)'
    }

})
