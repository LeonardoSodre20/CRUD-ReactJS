import React from "react";
import styles from '../../css/Main.module.css'
import { useState , useEffect} from "react";
import Axios from 'axios';
import Produtos from "../../components/Produtos/Produtos";

function Main () {

    const [values, setValues] = useState();
    const [listProdutos, setListProdutos] = useState();
    console.log(listProdutos)
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value
        }))
    }

    const handleClickButton = () => {
        Axios.post("http://localhost:3002/registro", {
            name: values.name,
            preco: values.preco,
            descricao: values.descricao,
            peso: values.peso
        }).then((response) => {
            console.log(response.data)
        })
    }

    useEffect(() => {
        Axios.get("http://localhost:3002/getProdutos")
            .then(response => {
                setListProdutos(response.data)
            })
    })

    return (
        <div className={styles.containerPrincipal}>
            <div className={styles.containerCadastro}>
                <h1 className={styles.titleCadastro}>Informações do Produto</h1>
                <input type="text" name="name" placeholder="Digite o nome do produto...." className={styles.inputProdutos} onChange={handleChangeValues}></input>
                <input type="number" name="preco" placeholder="Digite o preço do produto...." className={styles.inputProdutos} onChange={handleChangeValues}></input>
                <input type="text" name="descricao" placeholder="Digite alguma descrição para o produto...." className={styles.inputProdutos} onChange={handleChangeValues}></input>
                <input type="number" name="peso" placeholder="Digite o peso do produto...." className={styles.inputProdutos} onChange={handleChangeValues}></input>

                <button className={styles.buttonCadastrar} onClick={() => {
                    handleClickButton()
                }}>Cadastrar</button>
            </div>

            {typeof listProdutos !== "undefined" && listProdutos.map((value) => {
                return <Produtos key={value.id} listProdutos={listProdutos} 
                setListProdutos={setListProdutos}
                id={value.id}
                name={value.nomeProduto}
                preco={value.preco}
                descricao={value.descricao}
                peso={value.peso}
                ></Produtos>
            })}
        </div>
    )
}

export default Main