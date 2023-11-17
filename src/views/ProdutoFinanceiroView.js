const ProdutoFinanceiroListener = require("./ProdutoFinanceiroListener")
const express = require('express');

module.exports = class ProdutoFinanceiroView {
    listener
    router;
    constructor() {
        this.listener = new ProdutoFinanceiroListener();

        this.router = express.Router();

        this.router.post('/calcularValorProjetado', this.calcularValorProjetado);
        this.router.post('/adicionarInvestimento', this.adicionarInvestimento);

    }

    calcularValorProjetado = (req, res) => {
        const valorCalculado = this.listener.calcularValorProjetado(req.body.cod, req.body.valor);
        res.json(valorCalculado);
    }

    adicionarInvestimento = (req, res) => {
        const investimento = this.listener.adicionarInvestimento(req.body.cod, req.body.valor, req.body.cpf);
        res.json(investimento);
    }
}