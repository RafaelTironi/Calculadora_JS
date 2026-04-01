let parcial = "";
let opRealizada = document.getElementById("operacaoRealizada");
let txtResult = document.getElementById("Resultado");
let opSelecionada = "";
let numero = "";
let ultimoNumero = "";

function adicionarNumero(num) {
    numero += num;
    parcial += num;
    opRealizada.innerHTML = parcial;

    if (numero == '0' && opSelecionada == '/') {
        limpar();
        txtResult.innerHTML = "ERR";
        return;
    }
    if (ultimoNumero == 'adicionarNumero') {
        ultimoNumero = 'numero'
    }
}

function operador(op) {
    opSelecionada = op;
    ultimoNumero = 'operador';
    parcial += op;
    numero = "";
    opRealizada.innerHTML = parcial;
}

function calculo() {
    parcial = eval(parcial);
    txtResult.innerHTML = parcial;
    parcial = parcial.toString();
    numero = "";
    opRealizada.innerHTML = parcial;
}

function limpar() {
    parcial = "";
    opRealizada.innerHTML = "0";
    txtResult.innerHTML = "0";
    numero = "";
    opSelecionada = "";
    
}