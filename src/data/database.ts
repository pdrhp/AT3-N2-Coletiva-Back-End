import sqlite3 from "sqlite3";
import { scripts } from "./databaseScripts";

sqlite3.verbose();


const openConnection = () => {
    return new sqlite3.Database("src/data/livraria.db");
}

export const initDatabase = () => {
  const db = openConnection();
  db.serialize(() => {
    db.exec(scripts.livros);
    db.close();
  });
};

export const runGetAllQuery = (query: string): Promise<any> => {
  const db = openConnection();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(query, (err, rows) => {
        if (err) {
          reject(err);
        }

        resolve(rows);
      });
      db.close();
    });
  });
};

export const runGetQuery = (query: string): Promise<any> => {
  const db = openConnection();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.get(query, (err, row) => {
        if (err) {
          reject(err);
        }

        resolve(row);
      });

      db.close();
    });
  });
};

export const insertQuery = (query: string): Promise<any> => {
  const db = openConnection();
  return new Promise((resolve, reject) => {
    db.serialize(() => {
        db.run(query, function (err) {
            if (err) {
              reject(err);
            }
      
            resolve(this);
          });
        });

        db.close();
    })
};
