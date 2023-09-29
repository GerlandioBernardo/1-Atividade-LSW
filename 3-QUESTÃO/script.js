function calcularMelhorCombustivel(num1,num2){
    if(num1<num2){
        return 0;
    }
    if(num2<num1){
        return 1;
    }
}
let button = document.querySelector("#button")
button.addEventListener("click", function(){
    let gasolina= document.querySelector("#input1")
    let alcool= document.querySelector("#input2")
    let resu= document.querySelector("#res")
    let resul= document.querySelector("#resul")
    let num1= Number(gasolina.value)
    let num2= Number(alcool.value)
    if(num1<num2){
        let resposta= calcularMelhorCombustivel(num1,num2)
        resu.textContent="O melhor combustivel para abastecer é a gasolina"
        resul.textContent=resposta
    }
    if(num2<num1){
        let resposta= calcularMelhorCombustivel(num1,num2)
        resu.textContent="O melhor combustivel para abastecer é a álcool"
        resul.textContent=resposta
    }
    if(num1==num2){
        resul.textContent=" "
        resu.textContent="Combustiveis estão no mesmo preço!"
    }
})