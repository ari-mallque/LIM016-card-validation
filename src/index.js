import validator from './validator.js';

//console.log(validator);

let usuario=window.prompt("Ingresa tu nombre");
let msj= document.getElementById("nombreh2");

    while(usuario==""){
        alert("Ingresa tu nombre, por favor");
        usuario = window.prompt("Ingresa tu nombre");
    }
        msj.innerHTML="Bienvenida/o "+usuario+" a nuestro vívero Gran Orquidea";



let numeroTarjeta= document.getElementById("numero");

//Quitar espacios y letras al input donde se coloca el número de la tarjeta

let x=document.getElementById("numero");
x.addEventListener("keyup", (e)=>{
    let espacios = e.target.value;
    x.value = espacios.replace(/\s/g, "").replace(/\D/g, "");
});

//boton "Validar Tarjeta"

let boton= document.getElementById("validar");
boton.addEventListener('click', ()=>{
    let valorNumero = numeroTarjeta.value;
    //console.log(validator.isValid(valorNumero));
    
    //let cuadro= document.getElementById("cuadro");
    //cuadro.innerHTML= validator.isValid(valorNumero) + validator.maskify(valorNumero);
    if(valorNumero==""){
        alert("Por favor, ingresa el número de tu tarjeta");
        return true;
    }
    
    if (validator.isValid(valorNumero)==true){
        document.getElementById("positivo").style.display="block";
        document.getElementById("mensajePositivo").innerHTML= "¡Tú número de tarjeta " + validator.maskify(valorNumero) +" es válida! ¡Gracias por tu compra!";
        document.getElementById("negativo").style.display="none";
    }else{
        document.getElementById("negativo").style.display="block";
        document.getElementById("mensajeNegativo").innerHTML= "¡Uy, lo sentimos! Tú número de tarjeta " + validator.maskify(valorNumero) +" no es válida ): ";
        document.getElementById("positivo").style.display="none";
    }
});

//boton "Limpiar Datos"

let boton2 = document.getElementById("btnReset");
boton2.addEventListener('click',()=>{
        document.getElementById("form1").reset();
        document.getElementById("positivo").style.display="none";
        document.getElementById("negativo").style.display="none";
});

//mostrar formulario con imagen

let botonRosas = document.getElementById("planta1");
botonRosas.addEventListener('click',()=>{muestraFormulario("Rosas")});
let botonMargaritas = document.getElementById("planta2");
botonMargaritas.addEventListener('click',()=>{muestraFormulario("Margaritas")});
let botonNMO = document.getElementById("planta3");
botonNMO.addEventListener('click',()=>{muestraFormulario("NMO")});

function muestraFormulario(boton){
        document.getElementById("banner").style.display="none";
        document.getElementById("bienvenidos").style.display="none";
        document.getElementById("vivero").style.display="none";
        if(boton=="Rosas"){
            document.getElementById("planta2").style.display="none";
            document.getElementById("planta3").style.display="none";
        } else if (boton=="Margaritas") {
            document.getElementById("planta1").style.display="none";
            document.getElementById("planta3").style.display="none";
        } else {
            document.getElementById("planta1").style.display="none";
            document.getElementById("planta2").style.display="none";
        }
        document.getElementById("tarjeta").style.display="block";
}

let botonInicio = document.getElementById("inicio");
botonInicio.addEventListener('click', ()=>{
    document.getElementById("banner").style.display="block";
    document.getElementById("bienvenidos").style.display="block";
    document.getElementById("vivero").style.display="block";
    document.getElementById("planta1").style.display="block";
    document.getElementById("planta2").style.display="block";
    document.getElementById("planta3").style.display="block";
    document.getElementById("tarjeta").style.display="none";
    document.getElementById("positivo").style.display="none";
    document.getElementById("negativo").style.display="none";
});

