var menuBars = document.querySelector('.bars');
var menuList = document.querySelector('.menu-responsive');
var exits = document.querySelector('.exits');

menuBars.onclick = function (e) {
    menuBars.style.display = 'none';
    exits.style.display = 'block'
    menuList.style.display = 'block';
}

exits.onclick = function (e) {
    exits.style.display = 'none';
    menuBars.style.display = 'block'
    menuList.style.display = 'none';
}

var btnTop = document.querySelector('.btn__top');
var top = document.querySelector('.top')

function handleTop() {
    if (window.scrollY >= 400) {
        btnTop.style.display = 'flex';
    } else {
        btnTop.style.display = 'none';
    }
}

document.addEventListener('scroll', handleTop);

btnTop.onclick = function () {
    top.location.href = '#p1'
}











