require("dotenv").config();
const express = require('express');
const app = express();

app.use(express.json());

let books = [
    {
        id: 1,
        title: 'Book1',
        author: 'Author1'
    },
    {
        id: 2,
        title: 'Book2',
        author: 'Author2'
    },
    {
        id: 3,
        title: 'Book3',
        author: 'Author3'
    }
];

app.get("/", (req, res) => {
  res.send("Hello World Book!!!");
});

app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not found');
    res.json(book);
});

app.post('/books', (req, res) => {
    const book = {
        id: book.length + 1,
        title: req.body.title,
        author: req.body.author
    };
    book.push(book);
    res.send(book);
});

app.put('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not Found');
    book.title = res.body.title;
    book.author = req.bofy.author;
    res.send(book);
});

app.delete('/books/:id', (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (!book) res.status(404).send('Book not Found');
    const index = books.indexOf(book);
    book.splice(index, 1);
    res.send(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));