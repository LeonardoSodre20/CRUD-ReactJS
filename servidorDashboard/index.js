const express = require('express');
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "crudprodutos"
})

app.use(cors());
app.use(express.json());

app.post("/registro", (req, res) => {
    const {name} = req.body;
    const {preco} = req.body;
    const {descricao} = req.body;
    const {peso} = req.body;

    let sql = "INSERT INTO produtos (nomeProduto, preco, descricao, peso) VALUES (?,?,?,?)"

    db.query(sql, [name, preco, descricao, peso], (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.get("/getProdutos", (req,res) => {
    let sql = "SELECT * FROM crudprodutos.produtos;"

    db.query(sql, (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.put("/edit", (req, res) => {
    const {id} = req.body;
    const {name} = req.body;
    const {preco} = req.body;
    const {descricao} = req.body;
    const {peso} = req.body;

    let sql = "UPDATE produtos SET nomeProduto = ? , preco = ?, descricao = ? , peso = ? WHERE idprodutos = ?"

    db.query(sql, [name, preco, descricao, peso , id],  (err, result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.delete("/delete:id", (req,res) => {
    const {id} = req.params
    
    let sql = "DELETE FROM produtos WHERE idprodutos = ?";
    
    db.query(sql, [id],  (err,result) => {
        if(err){
            console.log(err)
        }
        else{
            res.send(result)
        }
    })
})

app.listen(3002, () => {
    console.log("Rodando Servidor")
})