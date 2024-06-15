import { execQuery, getAllQuery, getQuery } from "../data/database";
import Livro from "../models/Livro";



class LivroRepository implements IRepository<Livro> {
    getAll = async () => {
        const results: Livro[] = await getAllQuery(`SELECT id, titulo, autor, genero, quantidade FROM Livros`);
        return results;
    }

    getById = async (id: number) => {
        const result: Livro = await getQuery(`SELECT id, titulo, autor, genero, quantidade FROM Livros WHERE id = ${id}`)
        return result;
    }

    getByName = async (titulo: string) => {
        titulo = titulo.toLowerCase();
        const result: Livro = await getQuery(`SELECT id, titulo, autor, genero, quantidade FROM Livros WHERE titulo_normalized LIKE '${titulo}'`)
        return result;
    }

    create = async (livro: Livro) => {

        const normalized_titulo = livro.titulo.toLowerCase();

        const query = `INSERT INTO Livros (titulo, normalized_titulo, autor, genero, quantidade) VALUES (?, ?, ?, ?, ?)`
        const parameters = [livro.titulo, normalized_titulo, livro.autor, livro.genero, livro.quantidade]
        const result = await execQuery(query, parameters);
        return result;
    }

    update(id: string, item: Livro): Promise<Livro> {
        const query = `UPDATE LIVROS SET titulo = ?, autor = ?, genero = ?, quantidade = ? WHERE id = ?`
        const parameters = [item.titulo, item.autor, item.genero, item.quantidade, parseInt(id)]
        return execQuery(query, parameters);
    }

    delete(id: string): Promise<boolean> {
        const query = `DELETE FROM Livros WHERE id = ?`
        const parameters = [parseInt(id)]
        return execQuery(query, parameters);
    }
}


export default LivroRepository;





