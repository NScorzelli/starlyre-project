const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', function(req, res) {
res.sendFile(__dirname + '/public/index.html');
});

const port = 3030;
app.listen(port, function() {
console.log(`Servidor web iniciado na porta ${port}`);
});