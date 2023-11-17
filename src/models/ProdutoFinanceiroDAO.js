module.exports = class ProdutoFinanceiroDAO {
    obterProduto(cod) {
        return {
            cod,
            tipo: 'CDB',
            ultimaTaxa: 0.5
        }
    }
}