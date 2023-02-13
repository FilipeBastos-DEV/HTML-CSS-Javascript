function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "img/icons8-menu-arredondado-30.png"
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "img/icons8-fechar-janela-50.png"
    }
}