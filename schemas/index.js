import mongoose from 'mongoose'


export const connect = () => {
   
    mongoose.connect('mongodb://localhost:27017/testDB', {}, error =>{
        if(error){
            console.log('DB Connection is Error', error);
        }else{
            console.log('DB Connction is Succesful');
        }
    });
}

mongoose.connection.on('error', error => {
    console.error('DB Error',error);
});

mongoose.connection.on('disconnected', () => {
    console.error('DB Disconnected!');
});
