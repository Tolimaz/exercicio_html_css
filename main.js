document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault(); //pra evitar que o formulario seja enviado antes de vereficar se o numero b e maior que o numero a


    //obter valores do primeiro e segundo campo
    var campoA = parseInt(document.getElementById('numero-um').value, 10);
    var campoB = parseInt(document.getElementById('numero-dois').value, 10);

    var mensagemElemento = document.querySelector('.mensagem-final');



    if (campoB > campoA) {
        mensagemElemento.textContent = 'Formulário válido! B é maior que A.';
    }else if (campoA === campoB) {
        mensagemElemento.textContent = 'Os números são iguais. Insira valores diferentes.';
    } else {
        mensagemElemento.textContent = 'Formulário inválido! B deve ser maior que A.'
    }
});