function calculo() {
    let tamanho = document.getElementById('tamanho').value
    let peso = document.getElementById('peso').value
    let resultado = document.getElementById('resultado')
    let rst = (peso / tamanho) / 6 - 1.8;
    resultado.innerHTML = `O tamanho ideal para você é uma ${rst.toFixed(1)}`
    resultado.style.background = 'black'
    resultado.style.color = 'white'
}
