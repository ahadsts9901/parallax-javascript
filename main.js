let text = document.querySelector("#text")
let hill1 = document.querySelector("#hill1")
let hill2 = document.querySelector("#hill2")
let hill3 = document.querySelector("#hill3")
let hill4 = document.querySelector("#hill4")
let hill5 = document.querySelector("#hill5")
let leaf = document.querySelector("#leaf")

window.addEventListener("scroll", () => {

    let value = window.scrollY;

    text.style.paddingTop = value * 2.5 + "px";
    leaf.style.top = value * -1.5 + "px"
    leaf.style.left = value * 1.5 + "px"
    hill5.style.left = value * 1.5 + "px"
    hill4.style.left = value * -1.5 + "px"
    hill1.style.top = value * 1 + "px"

})