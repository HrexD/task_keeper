// db.js
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('tasks.db');

// Création de la table si elle n'existe pas
db.run(`
  CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    completed INTEGER
  )
`);

module.exports = db;
