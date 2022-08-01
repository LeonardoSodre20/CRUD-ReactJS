import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import produce from "immer";

function FormDialog(props) {

    const [editValues, setEditValues] = useState({
        id: props.id,
        name: props.name,
        preco: props.preco,
        descricao: props.descricao,
        peso: props.peso
    });

    const handleChangeValues = value => {
        setEditValues(prevValue => ({
            ...prevValue,
            [value.target.id]: value.target.value,
        }))
    }

    const handleClose = () => {
        props.setOpen(false);
    } 

    const handleEditProduto = () => {

        Axios.put("http://localhost:3002/edit", {
            id: editValues.id,
            name: editValues.name,
            preco: editValues.preco,
            descricao: editValues.descricao,
            peso: editValues.peso
        })
        handleClose();
    }

    const handleDeleteProduto = () => {
        Axios.delete(`http://localhost:3002/delete/${editValues.id}`, {
        })
        handleClose();
    }

  return (
     <div>
         <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="id"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do Produto"
            defaultValue={props.name}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="preco"
            label="Preço"
            defaultValue={props.preco}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="descricao"
            label="Descrição"
            defaultValue={props.descricao}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />

        <TextField
            autoFocus
            margin="dense"
            id="peso"
            label="Peso"
            defaultValue={props.peso}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteProduto()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditProduto()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
     </div>
  );
}

export default FormDialog