let button = document.querySelector("#button")
button.addEventListener("click",  function (){
    let num1=0, num2=0, num3=0, num4=0, num5=0, num6=0
    for(let k=1;k<=1000000;k++){
        let numero= Math.floor(Math.random() * 6 ) + 1;
        if(numero==1){
            num1++
        }
        if(numero==2){
            num2++
         }
         if(numero==3){
            num3++
         }
         if(numero==4){
            num4++
         }
         if(numero==5){
            num5++
         }
         if(numero==6){
            num6++
         }
    }
    let resultado1= document.querySelector("#res")
    let resultado2= document.querySelector("#resu")
    let resultado3= document.querySelector("#resul")
    let resultado4= document.querySelector("#resulta")
    let resultado5= document.querySelector("#resultad")
    let resultado6= document.querySelector("#resultado")
    resultado1.textContent= "O Número 1: " + num1 + " Vezes"
    resultado2.textContent="O Númerro 2: "+ num2 + " Vezes"
    resultado3.textContent="O Número 3 :" + num3 + " Vezes"
    resultado4.textContent="O Número 4 : "+ num4 + " Vezes" 
    resultado5.textContent="O Número 5: "+ num5 + " Vezes"
    resultado6.textContent="O Número 6: "+ num6 + " Vezes"

})