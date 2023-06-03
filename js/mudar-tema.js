
//const button = document.getElementById('botao-alterar-tema')
//let img = document.querySelector('.bx-toggle-right');
//let img = document.querySelector('.bx-adjust')
//let img = document.querySelector('.bx-brightness')

    //button.addEventListener("click", () => {
        //img.classList.toggle("dark");
        //body.classList.toggle("dark");
    //})


const button = document.getElementById('botao-alterar-tema')


button.addEventListener("click", () => {
    
const body = document.querySelector("body");
    
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");
const modoEscuroEstaAtivo = body.classList.contains("dark");
    body.classList.toggle("dark");

    if (modoEscuroEstaAtivo) {
        //imagemBotaoTrocaDeTema.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/2222/2222367.png");
        imagemBotaoTrocaDeTema.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/979/979585.png")
    } else {

        imagemBotaoTrocaDeTema.setAttribute("src", "https://cdn-icons-png.flaticon.com/512/581/581550.png");
    }
})
   
