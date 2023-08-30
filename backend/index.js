// index.js
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/tasks', (req, res) => {
  db.all('SELECT * FROM tasks', (err, rows) => {
    if (err) {
      res.status(500).json({ message: 'Erreur lors de la récupération des tâches' });
      return;
    }
    res.json(rows);
  });
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  const completed = 0; // Nouvelle tâche, donc non terminée par défaut
  db.run('INSERT INTO tasks (title, completed) VALUES (?, ?)', [title, completed], function(err) {
    if (err) {
      res.status(500).json({ message: 'Erreur lors de la création de la tâche' });
      return;
    }
    res.json({ id: this.lastID, title, completed });
  });
});

app.patch('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  const { title, completed } = req.body;
  db.run('UPDATE tasks SET title = ?, completed = ? WHERE id = ?', [title, completed, taskId], (err) => {
    if (err) {
      res.status(500).json({ message: 'Erreur lors de la mise à jour de la tâche' });
      return;
    }
    res.json({ id: taskId, title, completed });
  });
});

app.delete('/tasks/:id', (req, res) => {
  const taskId = req.params.id;
  db.run('DELETE FROM tasks WHERE id = ?', [taskId], (err) => {
    if (err) {
      res.status(500).json({ message: 'Erreur lors de la suppression de la tâche' });
      return;
    }
    res.json({ message: 'Tâche supprimée avec succès' });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
