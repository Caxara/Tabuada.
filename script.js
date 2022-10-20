function calcular() {
    let inicio = document.getElementById('txtini')
    let resultado = document.getElementById('res')

    if(inicio.value.length == 0){
        resultado.innerHTML += `Informe um número!!`
    }
}