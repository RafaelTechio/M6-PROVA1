const CDB = require("../models/CDB");
const ProdutoFinanceiroDAO = require("../models/ProdutoFinanceiroDAO");
const TaxaSoa = require("../models/TaxaSoa");
const UsuarioDAO = require("../models/UsuarioDAO");

module.exports = class ProdutoFinanceiroController {
    taxaSOA;
    produtoFinanceiroDAO;
    usuarioDAO;

    constructor() {
        this.taxaSOA = new TaxaSoa();
        this.produtoFinanceiroDAO = new ProdutoFinanceiroDAO();
        this.usuarioDAO = new UsuarioDAO();
    }


    calcularValorProjetado(cod, valor) {
        const produtoFinanceiro = this.produtoFinanceiroDAO.obterProduto(cod);
        if(produtoFinanceiro.tipo == 'CDB') {
            const taxa = this.taxaSOA.obterTaxa(cod);
            const cdb = new CDB(produtoFinanceiro.cod);
            return cdb.calcularValorProjetado(valor, taxa)
        } else {
            throw new Error('Produto Financeiro não suportado')
        }
    }

    adicionarInvestimento(cod, valor, cpf) {
        const produtoFinanceiro = this.produtoFinanceiroDAO.obterProduto(cod);
        if(produtoFinanceiro.tipo == 'CDB') {
            return this.usuarioDAO.adicionarInvestimento(cpf, cod, valor)
        } else {
            throw new Error('Produto Financeiro não suportado')
        }
    }
}
