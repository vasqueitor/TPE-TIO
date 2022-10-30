"use strict";
let random = Math.floor((Math.random()*1000)+1);
let numero = document.querySelector("#numeroRandom");
numero.innerHTML= random;
let inputcaptcha= document.querySelector("#captcha");
let boton = document.querySelector("#btn");
boton.addEventListener("click", captcha);

function maximo(num1, num2) {
    if (num1>num2) {
      return num1
    }
    else {
      return num2
    }
  }
  
console.log (maximo(7, 9))

function captcha () {
    event.preventDefault()
    let value = parseInt (inputcaptcha.value);
    if (value == random) {
        resultado.innerHTML = "¡Correcto! Mil disculpas por el prejuicio";
        let unlock = document.querySelector ("#submit");
        unlock.type = "submit"
    }
    else {
        resultado.innerHTML = "Incorrecto, sólo un robot respondería así";
        let unlock = document.querySelector ("#submit");
        unlock.type = "hidden"
    }
}
