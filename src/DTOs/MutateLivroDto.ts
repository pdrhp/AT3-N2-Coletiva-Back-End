import { z } from "zod";

const MutateLivroDto = z.object({
    titulo: z.string().min(1).max(255),
    autor: z.string().min(1).max(255),
    genero: z.string().min(1).max(255),
    capa: z.string().url('É necessario ser uma url de uma imagem').optional(),
    quantidade: z.number().int().positive()
})


export default MutateLivroDto;