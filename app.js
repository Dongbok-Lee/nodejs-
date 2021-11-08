import express from 'express';
import {connect} from './schemas/index.js';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

dotenv.config();

// routes
import bubble_message_router from './routes/bubble_message.js'
import status_message_router from './routes/status_message.js'


const app = express();
let port = process.env.port || 3000;

//etc middleware
app.use(morgan('dev'))
app.use(cookieParser(process.env.COOKIE_SECRET))

//db
connect();

//bodyparser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//set router
app.use('/bubble',bubble_message_router);
app.use('/status',status_message_router);


const server = app.listen(port, () => {
    console.log(`server on ${port}`);
});

//ERR
app.use((req, res, next) =>{
    const error = new Error('${req.method} ${req.url} no router');
    error.status = 404;
    next(error);
});

app.use((err, req, res, next)=> {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err: {};
    res.status(err.status || 500);
    res.render('error');
});