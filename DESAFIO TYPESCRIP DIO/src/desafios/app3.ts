// O código abaixo tem alguns erros e não funciona como deveria. Você pode identificar quais são e corrigi-los em um arquivo TS?

let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo')!;
let soma = document.getElementById('soma')! as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo')!;

let total = 0;

limpaSoma();


function limpaCampoSoma(){
    soma.value = " "; 
}
function adicionaSaldo(soma:number){
    if(campoSaldo){
        total += soma
        campoSaldo.innerHTML = total.toString();
        limpaCampoSoma();
    }
}

function limpaSoma(){
    if(campoSaldo){
        total = 0;
        campoSaldo.innerHTML = total.toString();
    }
}

if (botaoAtualizar) {
    botaoAtualizar.addEventListener('click', () => {
        adicionaSaldo(Number(soma.value)); 
    });
}


botaoLimpar.addEventListener('click', () => { 
    limpaSoma();
}); 


