const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors")

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "userinfo",
})

app.use(express.json());
app.use(cors());

app.post("/registro", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query("SELECT * FROM usuarios WHERE email = ?", [email], (err,result) => {
        if(err){
            res.send(err)
        }
        if(result.lenght == 0){
            db.query("INSERT INTO usuarios (email, password) VALUE (?, ?)", [email, password], (err,result) => {
                if(err){
                    res.send(err);
                }

                res.send({msg: "Cadastrado com sucesso!"})
            })
        }
        else{
            res.send({msg: "Usuário já cadastrado!"})
        }

        res.send(result);

    })
})

app.listen(3001, () => {
    console.log("Servidor no Ar")
})