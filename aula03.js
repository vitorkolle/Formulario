'use strict'

const botaoSomar = document.getElementById('somar')
botaoSomar.addEventListener('click', somar)

const botaoIdentificar = document.getElementById('identificar')
botaoIdentificar.addEventListener('click', identificar)

const botaoCalcularMedia = document.getElementById('media')
botaoCalcularMedia.addEventListener('click', calcularMedia)

const botaoCalcularExame = document.getElementById('calcExame')
botaoCalcularExame.addEventListener('click', calcularExame)

function somar(){
    const num1 = Number(document.getElementById('num1').value)
    const num2 = Number(document.getElementById('num2').value)

    const resultado = document.getElementById('resultado')

    const total = num1 + num2
    resultado.textContent = total
}

function identificar(){
    const numero = Number(document.getElementById('numero-item2').value)
    const resultado = document.getElementById('resultado-item2')

    if(numero > 0){
       resultado.textContent = "Positivo"
    }else if(numero < 0){
        resultado.textContent = "Negativo"
    }else{
        resultado.textContent = "Zero"
    }
}

function calcularMedia(){
    const n1 = Number(document.getElementById('nota1').value)
    const n2 = Number(document.getElementById('nota2').value)
    const n3 = Number(document.getElementById('nota3').value)
    const n4 = Number(document.getElementById('nota4').value)

    const resultadoMedia = document.getElementById('mediaFinal1')

    const calculoMedia = (n1 + n2 + n3 + n4 ) / 4
    resultadoMedia.textContent = calculoMedia

    if(calculoMedia >= 7){
        alert('Aluno Aprovado!')
    }else{
        alert('Informe a nota do exame')
        const exame = document.getElementById('exame')
        exame.classList.toggle('exame-reprovado')
    }
}

function calcularExame(){

    const n5 = Number(document.getElementById('notaRec').value)
    const resultadoExame = document.getElementById('mediaFinal2')
    
    resultadoExame.textContent = n5
    
    if(resultadoExame.textContent >= 5){
        alert('Aluno aprovado em exame!')
    }else{
        alert('Aluno reprovado!')
    }

  
    }
