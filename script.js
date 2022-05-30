const $links = document.querySelectorAll('a')
const $menuBtn = document.querySelector('#btn-menu')
const $menu = document.querySelector('#header-menu')

const toggleMenu = () => {
    $menu.classList.toggle('show')

    if ($menu.classList.contains('show')) {
        $menuBtn.innerHTML = '<img src="./assets/images/icon-close.svg">'
    } else {
        $menuBtn.innerHTML = '<img src="./assets/images/icon-hamburger.svg">'
    }

    
}

document.addEventListener('click', e => {
    if (e.target.matches('#btn-menu')) {
        toggleMenu()
    }
})

window.addEventListener('resize', (e)=>{
    if(e.target.innerWidth >= 768 && $menu.classList.contains('show')){
        toggleMenu()
    }
})




for(link of $links){
    link.addEventListener('click',(e)=>{
        e.preventDefault()
    })
}