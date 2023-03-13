const toggles = [
    document.querySelector("#toggle1"),
    document.querySelector("#toggle2"),
    document.querySelector("#toggle3"),
    document.querySelector("#toggle4"),
    document.querySelector("#toggle5")
]

const arrows = [
    document.querySelector(".arrow1"),
    document.querySelector(".arrow2"),
    document.querySelector(".arrow3"),
    document.querySelector(".arrow4"),
    document.querySelector(".arrow5")
]

const h2Gras = [
    document.querySelector(".visible-pannel1"),
    document.querySelector(".visible-pannel2"),
    document.querySelector(".visible-pannel3"),
    document.querySelector(".visible-pannel4"),
    document.querySelector(".visible-pannel5")
]

function addFaqActive(a){
    if (a.classList.contains("faq-active")) {
        a.classList.remove("faq-active")
    } else {
        for (i = 0 ; i < toggles.length ; ++i){
        toggles[i].classList.remove("faq-active")
        }
        a.classList.add("faq-active")
    }
}

function reverseArrow(a){
    if (a.classList.contains("turned")) {
        a.classList.remove("turned")
    } else {
        for (i = 0 ; i < arrows.length ; ++i){
        arrows[i].classList.remove("turned")
        }
        a.classList.add("turned")
    }
}

function addGras(a){
    if (a.classList.contains("gras")) {
        a.classList.remove("gras")
    } else {
        for (i = 0 ; i < h2Gras.length ; ++i){
        h2Gras[i].classList.remove("gras")
        }
        a.classList.add("gras")
    }
}