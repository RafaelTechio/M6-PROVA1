module.exports = class ProdutoFinanceiro {
    cod;
    ultimaTaxa;

    constructor(cod, ultimaTaxa) {
        this.cod = cod;
        this.ultimaTaxa = ultimaTaxa;
    }

    calcularValorProjetado(valor, juros) {
        this.ultimaTaxa = juros;
        return valor + (valor * juros);
    }
}