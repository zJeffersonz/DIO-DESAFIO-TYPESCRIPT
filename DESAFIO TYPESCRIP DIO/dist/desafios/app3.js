"use strict";
// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?
var botaoAtualizar = document.getElementById('atualizar-saldo');
var botaoLimpar = document.getElementById('limpar-saldo');
var soma = document.getElementById('soma');
var campoSaldo = document.getElementById('campo-saldo');
var total = 0;
limpaSoma();
function limpaCampoSoma() {
    soma.value = " ";
}
function adicionaSaldo(soma) {
    if (campoSaldo) {
        total += soma;
        campoSaldo.innerHTML = total.toString();
        limpaCampoSoma();
    }
}
function limpaSoma() {
    if (campoSaldo) {
        total = 0;
        campoSaldo.innerHTML = total.toString();
    }
}
if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', function () {
        adicionaSaldo(Number(soma.value));
    });
}
botaoLimpar.addEventListener('click', function () {
    limpaSoma();
});
//# sourceMappingURL=app3.js.map