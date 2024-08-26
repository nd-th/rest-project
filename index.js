import express from "express";
import bodyParser from "body-parser";
import pkg from 'pg';
const { Pool } = pkg;

const app = express();
const PORT = 3000;
app.use(bodyParser.json());


const pool = new Pool({
    user: "tpl822_6",
    host:"localhost",
    database: "tpl822_6", 
    password:"",
    port:5432,
});

app.get('/actor', async(req, res) =>{  
    const data =  await pool.query('SELECT * FROM actor')
   res.json(data.rows);
});

app.get('/actor/:id', async(req, res) =>{  
    const{id} =  req.params;
    const dt =  await pool.query('SELECT * FROM actor WHERE id = $1', [id])
   res.json(dt.rows[0]);
});

//app.post();

// app.put();


app.delete('/actor/:id', async(req, res) =>{  
    const{id} =  req.params;
    const dt =  await pool.query('SELECT * FROM actor WHERE id = $1', [id])
   res.json(dt.rows[0]);
});





app.listen(PORT , () => console.log(`server start on: ${PORT}`));