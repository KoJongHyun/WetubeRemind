import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import { userRouter } from './router';

const app = express();

const handleHome = (req, res) => res.send('Hello World!!');
const handleTest = (req, res) => res.send('Test');

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(helmet());
app.use(morgan("dev"));

app.get('/', handleHome);
app.use('/user', userRouter);

export default app;