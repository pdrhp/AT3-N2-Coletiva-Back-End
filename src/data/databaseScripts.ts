export const scripts = {
    livros: `
        CREATE TABLE IF NOT EXISTS Livros (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT NOT NULL,
            normalized_titulo TEXT NOT NULL,
            autor TEXT NOT NULL,
            genero TEXT NOT NULL,
            capa TEXT,
            quantidade INTEGER NOT NULL
        );
    `
}