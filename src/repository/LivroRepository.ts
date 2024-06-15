import { insertQuery, runGetAllQuery, runGetQuery } from "../data/database";
import Livro from "../models/Livro";

export const getAllLivros = async () => {
    const results: Livro[] = await runGetAllQuery(`SELECT * FROM Livros`);
    return results;
}

export const getLivroById = async (id: number) => {
    const result: Livro = await runGetQuery(`SELECT * FROM Livros WHERE id = ${id}`)
    return result;
}

export const getLivroByName = async (titulo: string) => {
    const result: Livro = await runGetQuery(`SELECT * FROM Livros WHERE titulo = '${titulo}'`)
    return result;
}

export const AddLivro = async (livro: Livro) => {

    const query = `INSERT INTO Livros (titulo, autor, genero, quantidade) VALUES (?, ?, ?, ?)`
    const parameters = [livro.titulo, livro.autor, livro.genero, livro.quantidade]

    const result = await insertQuery(query, parameters);

    return result;
}





