import express from 'express';



const LivroController = express.Router();


LivroController.get('/', (req, res) => {
    res.send('Hello World');
});

LivroController.post('/', (req, res) => {
    res.send('Hello World');
})

LivroController.put('/buy/:id', (req, res) => {

})

LivroController.put('/add/:id', (req, res) => {

})


