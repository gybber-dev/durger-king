const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080;

// Парсинг JSON тела запроса
app.use(bodyParser.json());

// Обработка POST запроса
app.post('/api/post', (req, res) => {
    console.log('Received POST request with body:', req.body);
    // Делаем что-то с данными, полученными из POST запроса

    // Отправляем ответ обратно
    res.status(200).send('POST request received');
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
