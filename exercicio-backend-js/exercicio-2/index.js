import express from 'express'

const hostname = "127.0.0.1"
const port = 3000
const app = express()

app.post('/lowercase', (req, res) => {
    const text = req.body;
    const response = {
        "action" : "lowercase",
        "input" : text,
        "output": text.toLowerCase()
    };
    res.send(response);
});

app.listen(3000, () => {
    console.log(`Servidor em https://${hostname}:${port}`)
})
