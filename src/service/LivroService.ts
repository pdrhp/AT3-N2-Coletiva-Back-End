import Livro from "../models/Livro";
import Response from "../models/Response";
import { getAllLivros } from "../repository/LivroRepository";


const getLivros = async (): Promise<Response<Livro[]>> => {
    const livros: Livro[] = await getAllLivros();

    if(livros.length === 0){
        return new Response(404, "Nenhum livro encontrado");
    }

    return new Response(200, "Livros encontrados", livros);
}



