import express from 'express';
import CreateLivroDto from '../DTOs/CreateLivroDto';
import validateBody from '../middlewares/ValidateBodyMiddleware';
import Livro from '../models/Livro';
import { addLivro } from '../service/LivroService';



const LivroController = express.Router();


LivroController.get('/', (req, res) => {
    res.send('Hello World');
});

LivroController.post('/', validateBody(CreateLivroDto) , async (req, res) => {
    const livro: Livro = req.body;

    const createResponse = await addLivro(livro);
    
    res.status(createResponse.status_code).json(createResponse);
})

LivroController.put('/:id', (req, res) => {

})

LivroController.delete('/:id', (req, res) => {

})

LivroController.put('/buy/:id', (req, res) => {

})

LivroController.put('/add/:id', (req, res) => {

})



export default LivroController;






