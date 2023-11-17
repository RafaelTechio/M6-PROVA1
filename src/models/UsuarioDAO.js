module.exports = class  UsuarioDAO {
    obterUsuario(cpf) {
        return {
            cpf,
            nome: 'Rafa',
            aplicacoes: []
        }
    }

    adicionarInvestimento(cpf, cod, valor) {
        return {
            cpf,
            nome: 'Rafa',
            aplicacoes: []
        }
    }
}