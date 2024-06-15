import { execQuery, getAllQuery, getQuery } from "../data/database";
import Livro from "../models/Livro";



class LivroRepository implements IRepository<Livro> {
    getAll = async () => {
        const results: Livro[] = await getAllQuery(`SELECT * FROM Livros`);
        return results;
    }

    getByName = async (titulo: string) => {
        const result: Livro = await getQuery(`SELECT * FROM Livros WHERE titulo = '${titulo}'`)
        return result;
    }

    getById = async (id: number) => {
        const result: Livro = await getQuery(`SELECT * FROM Livros WHERE id = ${id}`)
        return result;
    }

    create = async (livro: Livro) => {
        const query = `INSERT INTO Livros (titulo, autor, genero, quantidade) VALUES (?, ?, ?, ?)`
        const parameters = [livro.titulo, livro.autor, livro.genero, livro.quantidade]
        const result = await execQuery(query, parameters);
        return result;
    }

    update(id: string, item: Livro): Promise<Livro> {
        const query = `UPDATE LIVROS
                        SET titulo = ?,
                        SET autor = ?,
                        SET genero = ?,
                        set quantidade = ?
                        WHERE id = ?`

        const parameters = [item.titulo, item.autor, item.genero, item.quantidade, id]
        return execQuery(query, parameters);
    }

    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}


export default LivroRepository;





