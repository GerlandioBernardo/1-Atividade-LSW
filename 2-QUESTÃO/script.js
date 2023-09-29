const CalcularPotencia=(n1,n2)=>{
    return Math.pow(n1,n2)

}
let button = document.querySelector("#button")
button.addEventListener("click", function (){
    let num1 = document.getElementById("input1")
    let num2= document.getElementById("input2")
    let resu= document.getElementById("res")
    let n1= Number(num1.value)
    let n2= Number(num2.value)
    resu.innerHTML=CalcularPotencia(n1,n2)

})