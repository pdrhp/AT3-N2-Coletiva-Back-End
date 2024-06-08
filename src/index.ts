import express, { Express, Request, Response } from 'express';
import { initDatabase } from './data/database';


const app: Express = express();
const port = 5000;

app.use(express.json());




app.listen(port, () => {
    initDatabase();
    console.log(`Server aberto na porta: ${port}`);
});




