import { db } from "../data/database";


export function getAllLivros() {
    db.serialize(() => {
        db.all('SELECT * FROM Livros', (err, rows) => {
            if (err) {
                console.log('Erro ao buscar livros', err.message);
            } else {
                console.log(rows);
            }
        })
    })
}