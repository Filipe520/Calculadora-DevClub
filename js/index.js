const inputDisplay = document.querySelector(".display").value

function adicionarCaracter(caracter) {
    document.querySelector(".display").value += inputDisplay + caracter

}

function limpaTela() {
    document.querySelector(".display").value = ""
}

function calcular() {
    const inputDisplay = document.querySelector(".display").value
    document.querySelector('.display').value = eval(inputDisplay)
}

function inverterNumero() {
    const inputDisplay = document.querySelector(".display").value
    document.querySelector(".display").value = inputDisplay * -1
}