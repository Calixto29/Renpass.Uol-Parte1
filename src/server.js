const app = require('./app');

var port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
    
});

