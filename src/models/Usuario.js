module.exports = class Usuario {
    cpf;
    nome;
    aplicacoes;

    constructor(cpf, nome, aplicacoes) {
        this.cpf = cpf;
        this.nome = nome;
        this.aplicacoes = aplicacoes;
    }

    
}