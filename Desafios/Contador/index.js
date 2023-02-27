const increnentar = document.getElementById("btn-incrementar");
const zerar = document.getElementById("btn-zerar");
const decrementar = document.getElementById("btn-decrementar"); 
const p = document.getElementById("contador");

let contador = 0;

p.innerHTML = contador;

increnentar.addEventListener("click", function (){
    p.innerHTML = ++contador;
});

decrementar.addEventListener("click", function (){
    p.innerHTML = --contador;
});

zerar.addEventListener("click", function (){
    p.innerHTML = contador = 0 ;
});