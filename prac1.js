var nombre = document.getElementById('nombre');
var password= document.getElementById('password');
var edad= document.getElementById('edad');
var email=document.getElementById('Email');
var error=document.getElementById('error');
error.style.color= 'red';

//funciones//
function enviarFormulario(){
    console.log('enviando el formulario......');
    
    var mensajeDeError= [];

    if(nombre.value === null ||nombre.value === ''){
       mensajeDeError.push('ingresa tu nombre');
    }
    if(password.value === null||password.value===''){
        mensajeDeError.push('ingresa tu password');
     }
     if(edad.value === null||edad.value===''){
        mensajeDeError.push('ingresa tu edad ');
     }
     if(email.value === null||email.value===''){
        mensajeDeError.push('ingresa tu Email');
     }
     mensajeDeError.join(' ,');
    return false;
}