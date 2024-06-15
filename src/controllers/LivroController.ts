import express from 'express';



const LivroController = express.Router();


LivroController.get('/', (req, res) => {
    res.send('Hello World');
});

LivroController.post('/', (req, res) => {
    res.send('Hello World');
})

LivroController.put('/:id', (req, res) => {

})

LivroController.delete('/:id', (req, res) => {
    
})

LivroController.put('/buy/:id', (req, res) => {

})

LivroController.put('/add/:id', (req, res) => {

})








