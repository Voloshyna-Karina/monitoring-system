import express, { Request, Response } from 'express';
import mysql, { Connection } from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3001;

app.use(cors());

const connection: Connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '11111',
  database: 'monitoring_system'
});

connection.connect((err) => {
  if (err) {
    console.error('Ошибка подключения к базе данных:', err);
  } else {
    console.log('Подключение к базе данных успешно');
  }
});

app.get('/monitoring_system', (req: Request, res: Response) => {
  connection.query('SELECT * FROM monitoring_system', (error, results) => {
    if (error) {
      console.error('Ошибка при выполнении запроса:', error);
      res.status(500).json({ error: 'Ошибка при получении данных' });
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});