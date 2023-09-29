function gerarNumero(){
    return Math.floor(Math.random() * 100 ) + 1;
}

let button=document.getElementById("button")
button.addEventListener("click", function() {
    let ul = document.getElementById("ul")
    let li = document.createElement('li')
    let numero= gerarNumero()
    li.appendChild(document.createTextNode(numero))
    ul. appendChild(li)
    document.body.appendChild(ul)
    li.style.backgroundColor='white'

})