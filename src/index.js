const express = require('express');
const ProdutoFinanceiroView = require('./views/ProdutoFinanceiroView');

const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(`Request [${new Date().toISOString()}] ${req.method} ${req.url}`)
    next();
})

const produtoFinanceiroView = new ProdutoFinanceiroView();
app.use('/', produtoFinanceiroView.router);

app.listen(3000, () => {
    console.log(`API escutando porta 3000`);    
})