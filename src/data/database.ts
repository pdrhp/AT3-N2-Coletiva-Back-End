import sqlite3, { Database } from 'sqlite3';
import { open } from 'sqlite3';
import { scripts } from './databaseScripts';



sqlite3.verbose();
export async function initDatabase(): Promise<Database> {
    const db = open({
        filename: "./src/data/database.db",
        driver: sqlite3.Database
    });

    await db.exec(scripts.livros);

    return db;
}

