import Livro from "../models/Livro";
import Response from "../models/Response";
import LivroRepository from "../repository/LivroRepository";


const livroRepository = new LivroRepository();

export const getLivros = async (titulo?: string): Promise<Response<Livro[]>> => {

    let livros: Livro[] = [];

    if(titulo){
        console.log('caiu dentro do if')
        livros = await livroRepository.getByName(titulo);
        if(livros.length === 0){
            return new Response(404, "Nenhum livro encontrado");
        }
        return new Response(200, "Livros encontrados", livros);
    }

    livros = await livroRepository.getAll();
    if(livros.length === 0){
        return new Response(200, "Nenhum livro encontrado");
    }
    return new Response(200, "Livros encontrados", livros);
}


export const addLivro = async (livro: Livro): Promise<Response<Livro>> => {
    const result = await livroRepository.create(livro);
    const livroCriado: Livro = await livroRepository.getById(result.lastID);
    return new Response(201, "Livro adicionado com sucesso", livroCriado);
}

export const updateLivro = async (id: string, livro: Livro): Promise<Response<Livro>> => {
    if(!await livroRepository.getById(parseInt(id))){
        return new Response(404, "Livro não encontrado");
    }

    const result = await livroRepository.update(id, livro);
    const livroAtualizado: Livro = await livroRepository.getById(parseInt(id));
    return new Response(200, "Livro atualizado com sucesso", livroAtualizado);
}

export const deleteLivro = async (id: string): Promise<Response<unknown>> => {
    if(!livroRepository.getById(parseInt(id))){
        return new Response(404, "Livro não encontrado");
    }

    const result = await livroRepository.delete(id);
    return new Response(200, "Livro deletado com sucesso");
}

export const buyLivro = async (id: string): Promise<Response<Livro>> => {
    const livro: Livro = await livroRepository.getById(parseInt(id));
    if(!livro){
        return new Response(404, "Livro não encontrado");
    }
    if(livro.quantidade === 0){
        return new Response(400, "Livro sem estoque");
    }
    livro.quantidade--;
    const result = await livroRepository.update(id, livro);
    const livroAtualizado: Livro = await livroRepository.getById(parseInt(id));

    return new Response(200, "Livro comprado com sucesso", livroAtualizado);
}

export const addLivroToStock = async (id: string): Promise<Response<Livro>> => {
    const livro: Livro = await livroRepository.getById(parseInt(id));
    if(!livro){
        return new Response(404, "Livro não encontrado");
    }
    livro.quantidade++;
    const result = await livroRepository.update(id, livro);
    const livroAtualizado: Livro = await livroRepository.getById(parseInt(id));

    return new Response(200, "Livro adicionado ao estoque com sucesso", livroAtualizado);
}

