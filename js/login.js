$(document).ready(function (){
    $('#sign-in').click(function () { 
        validarLogin();
    }); 

 });

 function validarLogin(){
    let usuario = document.getElementById('usuario').value;
    let senha = document.getElementById('senha').value;
    
    if(usuario.trim () =='' || senha.trim() =='' ){
        alert('Por favor preencher todos os campos.')
    }else{
        alert('Você não possui cadastro, click em criar conta.'); }

    }


