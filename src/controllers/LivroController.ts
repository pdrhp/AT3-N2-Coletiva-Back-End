import express from 'express';
import MutateLivroDto from '../DTOs/MutateLivroDto';
import validateBody from '../middlewares/ValidateBodyMiddleware';
import Livro from '../models/Livro';
import { addLivro, deleteLivro, getLivros, updateLivro } from '../service/LivroService';



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

LivroController.put('/buy/:id', (req, res) => {
    
})

LivroController.put('/add/:id', (req, res) => {

})



export default LivroController;






