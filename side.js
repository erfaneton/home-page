let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".header-icon")
let menuBtnIcon = document.querySelector(".header-icon i")

menuBtn.addEventListener("click",function (){
    if (menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "-27px"
        menuBtnIcon.classList = "fa fa-times"
    } else {
        menu.style.left = "-288px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})