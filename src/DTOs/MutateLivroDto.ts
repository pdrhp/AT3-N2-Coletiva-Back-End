import { z } from "zod";

const MutateLivroDto = z.object({
    titulo: z.string().min(1).max(255),
    autor: z.string().min(1).max(255),
    genero: z.string().min(1).max(255),
    quantidade: z.number().int().positive()
})


export default MutateLivroDto;