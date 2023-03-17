const Conversor = require('./js/conversor');

function pegarDados() {
    const tipoMoedaBase = document.querySelector("#moeda-base option:checked").value;
    const tipoMoedaConvertida = document.querySelector("#moeda-convertida option:checked").value;
    if (tipoMoedaBase == tipoMoedaConvertida) {
        return alert("Escolha moedas diferentes para fazer a conversão");
    }
    try {
        const input = document.querySelector("#valor").value;
        if (input == '') {
            input = '0';
        }
        input.replace(/,/g, '.');
        let valor = parseFloat(input);
        chamarConversor(tipoMoedaBase, tipoMoedaConvertida, valor);
    } catch (erro) {
        alert("Digite o valor que deseja converter!!");
    }
}

async function chamarConversor(tipoMoedaBase, tipoMoedaConvertida, valor) {
    try {
        const cv = new Conversor();
        const mensagem = await cv.converter(tipoMoedaBase, tipoMoedaConvertida, valor);
        mostrarConversão(mensagem);
    }catch(erro){
        console.log(erro);
    }
}

function mostrarConversão(mensagem) {
    const divMensagem = document.querySelector("#valor-convertido");
    divMensagem.innerHTML = mensagem;
}

function inverter(){
    let opt1 = document.querySelector("#moeda-base");
    let opt2 = document.querySelector("#moeda-convertida");
    const aux = opt1.value;
    opt1.value = opt2.value;
    opt2.value = aux;
}

function main() {
    document.querySelector("#enviar").addEventListener("click", pegarDados);
    document.querySelector("#limpar").addEventListener("click", () => {
        document.querySelector("#valor-convertido").innerHTML = "";
    });
    document.querySelector("#inverter").addEventListener("click", inverter);
}
main();
