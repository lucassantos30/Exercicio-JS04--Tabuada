function tabuada(){
    let num1 = document.querySelector("input#num")
    let tab = document.getElementById("res")

    if (num1.value.length == 0){
        window.alert("Por favor, digite um número")
    } else {
        let numero = Number(num1.value)
        tab.innerHTML="" // isso faz com que o cálculo anterior seja limpo ao se solicitar outro cálculo

        for (let valor = 1; valor <=10; valor++){
            let item = document.createElement ("option") //Cria a janela que apresentará a tabuada
            item.text = `${numero} x ${valor} = ${numero*valor}`
            item.value = `tab${valor} `
            tab.appendChild(item)
        }
        janela.style.display = "block" //exibir janela da tabuada, que foi ocultada no CSS
    }
}