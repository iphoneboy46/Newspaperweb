var menuBars = document.querySelector('.bars');
var menuList = document.querySelector('.menu-responsive');

menuBars.onclick = function(e){
    menuList.classList.toggle('show')
}