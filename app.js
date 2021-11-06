import express from 'express';
import { createServer } from 'http';
const app = express();
var server = createServer(app);

app.get('/', function(req, res){
    res.send('root page');
});

app.get('/start', function(req, res){
    res.send('root page');
});

server.listen(3000, '127.0.0.1', function(){
    console.log('Server listen on port' + server.address().port);
})