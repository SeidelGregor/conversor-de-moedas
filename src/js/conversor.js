class API {
    async chamadaApi(moedaBase, moedaConversao) {
        try {
            const url = `https://economia.awesomeapi.com.br/last/${moedaBase}-${moedaConversao}`;
            const moeda = await fetch(url);
            const data = await moeda.json();
            const modeloConversao = `${moedaBase}${moedaConversao}`
            const e = `data.${modeloConversao}`;
            return eval(e);

        } catch (erro) {
            Promise.reject(erro);
        }
    }
    async converter(moedaBase, moedaConversao, valorParaConverter) {
        try {
            
            const moeda = await this.chamadaApi(moedaBase, moedaConversao);
            const valorMaior = parseFloat(moeda.high);
            const valorMenor = parseFloat(moeda.low);
            const valorConversao = (valorMaior+valorMenor) / 2;
            const valorConvertido = valorParaConverter * valorConversao;
            const mensagem = `<p>Tipo conversão: ${moeda.name}<br>Valor convertido: ${valorConvertido.toFixed(2)}</p>`;
            return mensagem;
        }catch(e){
            Promise.reject(e);
        }
        
    }
}
module.exports = API;