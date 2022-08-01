import React from "react";
import styles from '../../css/Produto.module.css'
import FormDialog from "../FormDialog/dialog";


export default function Produtos(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        preco={props.preco}
        descricao={props.descricao}
        peso={props.peso}
        listProdutos={props.listProdutos}
        setListProdutos={props.setListProdutos}
        id={props.id}
      />
       <div className={styles.containerProduto} onClick={() => setOpen(true)}>
                <ul className={styles.produtosInfo}>
                    <li className={styles.titleProduto}>Nome : {props.name}</li>
                    <li className={styles.precoProduto}>Preço : R$ {props.preco}</li>
                    <li className={styles.descricaoProduto}>Descrição : {props.descricao}</li>
                    <li className={styles.pesoProduto}>Peso : {props.peso}</li>
                </ul>
        </div>
    </>
  );
}



