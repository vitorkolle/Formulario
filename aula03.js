'use strict'

const botaoSomar = document.getElementById('somar')
botaoSomar.addEventListener('click', somar)

const botaoIdentificar = document.getElementById('identificar')
botaoIdentificar.addEventListener('click', identificar)

const botaoCalcularMedia = document.getElementById('media')
botaoCalcularMedia.addEventListener('click', calcularMedia)

const botaoCalcularExame = document.getElementById('calcExame')
botaoCalcularExame.addEventListener('click', calcularExame)

const botaoIdentificarParOuImpar = document.getElementById('identificar-par/impar')
botaoIdentificarParOuImpar.addEventListener('click', identificarParOuImpar)

const botaoIdentificar09 = document.getElementById('identificar-09')
botaoIdentificar09.addEventListener('click', identificar09)

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

function identificarParOuImpar(){

    const valor = Number(document.getElementById('valor').value)
    const resultadoComparacao = document.getElementById('resultadoComparacao')

    if(valor % 2 == 0){
        resultadoComparacao.textContent = 'Par' 
    }else{
        resultadoComparacao.textContent = 'Ímpar'
    }

}

function identificar09(){
    const valor09 = Number(document.getElementById('valor09').value)
    const resultadoComparacao09 = document.getElementById('resultadoComparacao09')
   
    resultadoComparacao09.textContent = valor09

    if (valor09 >= 1 && valor09 <= 9){
        alert('O valor está na faixa permitida')
    }else{
        alert('O valor está fora da faixa permitida')
    }
}
