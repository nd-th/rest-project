import express from 'express';
import BOOKS from './books.js'
import { Router } from 'express';


const app = express();
const route = express.Router();
const books= BOOKS;

app.get('/books', (red, res) =>{
    req.json()
});


app.post();

app.put();


app.delete();





app.listen(3000);