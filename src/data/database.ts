import sqlite3 from 'sqlite3';
import { scripts } from './databaseScripts';

export const db = new sqlite3.Database('./src/data/database.db');

export const initDatabase = () => {
    db.serialize(() => {
        db.run(scripts.livros, (err) => {
            if (err) {
                console.log('Erro ao criar tabela Livros', err.message);
            }
        });

        db.close();
    });
}



