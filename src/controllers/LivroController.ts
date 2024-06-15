import express from 'express';
import MutateLivroDto from '../DTOs/MutateLivroDto';
import validateBody from '../middlewares/ValidateBodyMiddleware';
import Livro from '../models/Livro';
import { addLivro, addLivroToStock, buyLivro, deleteLivro, getLivros, updateLivro } from '../service/LivroService';

const LivroController = express.Router();

LivroController.get('/', async (req, res) => {
    const getLivrosResponse = await getLivros();
    res.status(getLivrosResponse.status_code).json(getLivrosResponse);
});

LivroController.post('/', validateBody(MutateLivroDto) , async (req, res) => {
    const livro: Livro = req.body;
    const createResponse = await addLivro(livro);
    res.status(createResponse.status_code).json(createResponse);
})

LivroController.put('/:id', validateBody(MutateLivroDto) ,async (req, res) => {
    const { id } = req.params;
    const livro: Livro = req.body;
    const updateResponse = await updateLivro(id, livro);
    res.status(updateResponse.status_code).json(updateResponse);
})

LivroController.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const deleteResponse = await deleteLivro(id);
    res.status(deleteResponse.status_code).json(deleteResponse);
})

LivroController.put('/buy/:id', async (req, res) => {
    const { id } = req.params;
    const buyResponse = await buyLivro(id);
    res.status(buyResponse.status_code).json(buyResponse);
})

LivroController.put('/add/:id', async (req, res) => {
    const { id } = req.params;
    const addResponse = await addLivroToStock(id);
    res.status(addResponse.status_code).json(addResponse);
})

export default LivroController;






