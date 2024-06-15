import express, { Express } from 'express';
import LivroController from './controllers/LivroController';
import { initDatabase } from './data/database';
import cors from 'cors';

const app: Express = express();
const port = 5000;

app.use(cors());

app.use(express.json());

app.use('/livros', LivroController)


app.listen(port, () => {
    initDatabase();
    console.log(`Server aberto na porta: ${port}`);
});




