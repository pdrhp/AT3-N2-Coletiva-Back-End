import { insertQuery, runGetAllQuery, runGetQuery } from "../data/database";
import Livro from "../models/Livro";



class LivroRepository implements IRepository<Livro> {
    getAll = async () => {
        const results: Livro[] = await runGetAllQuery(`SELECT * FROM Livros`);
        return results;
    }

    getByName = async (titulo: string) => {
        const result: Livro = await runGetQuery(`SELECT * FROM Livros WHERE titulo = '${titulo}'`)
        return result;
    }

    getById = async (id: number) => {
        const result: Livro = await runGetQuery(`SELECT * FROM Livros WHERE id = ${id}`)
        return result;
    }

    create = async (livro: Livro) => {
        const query = `INSERT INTO Livros (titulo, autor, genero, quantidade) VALUES (?, ?, ?, ?)`
        const parameters = [livro.titulo, livro.autor, livro.genero, livro.quantidade]
        const result = await insertQuery(query, parameters);
        return result;
    }

    update(id: string, item: Livro): Promise<Livro> {
        throw new Error("Method not implemented.");
    }
    
    delete(id: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
}


export default LivroRepository;





