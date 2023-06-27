let ingresar = document.getElementById('ingresar');
let registrarme = document.getElementById('registrarme');
let modal = document.getElementById('modal-toggle');
let cierre = document.getElementById('cierre');
let ingresar2 = document.getElementById('ingresar2');
let registrarme2 = document.getElementById('registrarme2');
let registrarme3 = document.getElementById('registrarme3');

cierre.addEventListener('click', () => {
    modal.style.display = "none";
});

ingresar.addEventListener('click', ()=>{
    modal.style.display = "flex";
});

registrarme.addEventListener('click', ()=>{
    modal.style.display = "flex";
});

ingresar2.addEventListener('click', ()=>{
    modal.style.display = "flex";
});

registrarme2.addEventListener('click', ()=>{
    modal.style.display = "flex";
});

registrarme3.addEventListener('click', ()=>{
    modal.style.display = "flex";
});