import { connect, connection } from 'mongoose';

connect('mongodb://localhost:27017/testDB');

var db = connection;

db.on('error', function(){
    console.log('Connection Failed!');
});

db.once('open', function(){
    console.log('Connected!');
});
