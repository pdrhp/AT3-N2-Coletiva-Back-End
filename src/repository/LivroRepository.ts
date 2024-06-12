import { runGetAllQuery, runGetQuery } from "../data/database";
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

