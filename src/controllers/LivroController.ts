import express from 'express';
import MutateLivroDto from '../DTOs/MutateLivroDto';
import validateBody from '../middlewares/ValidateBodyMiddleware';
import Livro from '../models/Livro';
import { addLivro, updateLivro } from '../service/LivroService';



const LivroController = express.Router();


LivroController.get('/', (req, res) => {
    res.send('Hello World');
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

LivroController.delete('/:id', (req, res) => {

})

LivroController.put('/buy/:id', (req, res) => {

})

LivroController.put('/add/:id', (req, res) => {

})



export default LivroController;






