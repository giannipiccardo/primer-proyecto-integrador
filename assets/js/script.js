let ingresar = document.getElementById('ingresar');
let registrarme = document.getElementById('registrarme');
let modal = document.getElementById('modal-toggle');
let cierre = document.getElementById('cierre');
let ingresar2 = document.getElementById('ingresar2');
let registrarme2 = document.getElementById('registrarme2');
let registrarme3 = document.getElementById('registrarme3');
let correo = document.getElementById('correo');
let boton = document.getElementById('boton');
let password = document.getElementById('password');

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

boton.addEventListener('click',()=>{
    if(correo.value.length==0){
        alert('ingresar correo');
    }
    if(password.value.length<8){
        alert('debe ingresar contraseña de al menos 8 caracteres');
    }
    if(!correo.value.length==0 && !password.value.length<8){
        modal.style.display = "none";
    }
});

