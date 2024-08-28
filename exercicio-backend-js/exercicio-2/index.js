const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/:action', (req, res) => {
    const { action } = req.params;
    const { input } = req.body;

    if (!input) {
        return res.status(400).json({ error: 'O campo input é obrigatório' });
    }

    let result;

    if (action === 'lowercase') {
        result = input.toLowerCase();
    } else if (action === 'uppercase') {
        result = input.toUpperCase();
    } else {
        return res.status(400).json({ error: 'Ação desconhecida' });
    }

    res.json({ result });
});

app.get('/:action', (req, res) => {
    const { action } = req.params;
    const input = req.query.input.split(',').map(Number);

    let result;

    if (action === 'minimum') {
        result = Math.min(...input);
    } else if (action === 'maximum') {
        result = Math.max(...input);
    } else {
        return res.status(400).json({ error: 'Ação desconhecida' });
    }

    res.json({ result });
});

app.listen(port, () => {
    console.log(`API rodando em http://localhost:${port}`);
});