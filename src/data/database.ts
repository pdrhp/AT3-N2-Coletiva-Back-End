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

export const getAllQuery = (query: string, parameters?: (string | number)[]): Promise<any> => {
  const db = openConnection();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.all(query, parameters, (err, rows) => {
        if (err) {
          reject(err);
        }

        resolve(rows);
      });
      db.close();
    });
  });
};

export const getQuery = (query: string, parameters?: (string | number)[]): Promise<any> => {
  const db = openConnection();

  return new Promise((resolve, reject) => {
    db.serialize(() => {
      db.get(query, parameters, (err, row) => {
        if (err) {
          reject(err);
        }

        resolve(row);
      });

      db.close();
    });
  });
};

export const execQuery = (query: string, parameters: (string | number)[]): Promise<any> => {
  const db = openConnection();
  return new Promise((resolve, reject) => {
    db.serialize(() => {
        db.run(query, parameters, function (err) {
            if (err) {
              reject(err);
            }
      
            resolve(this);
          });
        });

        db.close();
    })
};
