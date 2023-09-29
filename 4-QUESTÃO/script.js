let input = document.querySelector("#input1")
let resultado1=document.querySelector("#resul")
let resultado2= document.querySelector("#res")
let msg1=document.querySelector("#msg1")
let msg2=document.querySelector("#msg2")
function converterKelvin(num){
    let coversão= num + 273.15
    return coversão

}
function converterFahrenheit(num){
    let conversão= (num * 1.8) + 32
    return conversão
}
input.addEventListener("keyup", function(){
    let num=parseInt(input.value)
    if(!isNaN(num)){
        msg1.textContent=" "
        msg2.textContent=" "
        let valorKelvin=converterKelvin(num)
        let valorFahrenheit=converterFahrenheit(num)
        resultado1.textContent=valorKelvin
        resultado2.textContent=valorFahrenheit
     }

    else{
        resultado1.textContent= "-"
        msg1.textContent="Digite um valor válido"
        resultado2.textContent="-"
        msg2.textContent="Digite um valor válido"
     }

})
