import Livro from "../models/Livro";
import Response from "../models/Response";
import LivroRepository from "../repository/LivroRepository";


const livroRepository = new LivroRepository();

const getLivros = async (): Promise<Response<Livro[]>> => {
    const livros: Livro[] = await livroRepository.getAll();
    if(livros.length === 0){
        return new Response(404, "Nenhum livro encontrado");
    }
    return new Response(200, "Livros encontrados", livros);
}

export const addLivro = async (livro: Livro): Promise<Response<Livro>> => {
    const result = await livroRepository.create(livro);
    const livroCriado: Livro = await livroRepository.getById(result.lastID);
    return new Response(201, "Livro adicionado com sucesso", livroCriado);
}


