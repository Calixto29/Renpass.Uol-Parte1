const app = require('./src/app');

var port = 3000

app.listen(port, () => {
    console.log(`API rodando na ${port}`)
});