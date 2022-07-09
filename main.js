//menu botao

let menu = document.getElementById("menu")
let botao = document.getElementById("botao")

botao.addEventListener("click", ()=>{
    menu.classList.toggle("menu_ativa")
})