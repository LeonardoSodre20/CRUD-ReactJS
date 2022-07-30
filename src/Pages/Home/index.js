import React from 'react';
import { Formik, Form , Field , ErrorMessage } from 'formik';
import * as yup from 'yup';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import '../../App.css';

function Home() {
  const handleLogin = (values) => {
    Axios.post("http://localhost:3001/login", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      <Link to="/main"></Link>
    });
  };

  const handleRegister = (values) => {
    Axios.post("http://localhost:3001/register", {
      email: values.email,
      password: values.password,
    }).then((response) => {
      alert(response.data.msg);
      console.log(response);
    });

  };

  const validationLogin = yup.object().shape({
    email: yup
      .string()
        .email("O email é obrigatório !")
          .required(""),

    password: yup
      .string()
        .min(8, "A senha deve conter pelo menos 8 caracteres")
          .required("")
  })

  const validationRegistro = yup.object().shape({
    email: yup
      .string()
        .email("O email é obrigatório !")
          .required(""),

    password: yup
      .string()
        .min(8, "A senha deve conter pelo menos 8 caracteres")
          .required(""),

    confirmPassword: yup
      .string()
        .oneOf([yup.ref("password"), null], "As senhas não se coincidem !")
  })

  return (
    <div className='containerLoginAndRegistration'>
    <div className="containerInputs">
      <h1 className="tituloInput">Login</h1>
      <Formik initialValues={{}}
      onSubmit={handleLogin}
      validationSchema={validationLogin}>
      <Form className="formContainer">
        <div className="containerEmail">
        <Field name="email" className="emailInput inputs" placeholder="Digite seu email..."></Field>
        <ErrorMessage component="span"
          name="email"
          className="errorMessage"/>
        </div>
        <div className="containerPassword">
        <Field name="password" className="senhaInput inputs" placeholder="Digite sua senha..." type="password"></Field>
        <ErrorMessage component="span"
          name="password"
          className="errorMessage"/>
        </div>
       <button className="usuarioAutenticado" type='submit' onClick={handleLogin}>Login</button>
      </Form>
      </Formik>
    </div>

    <div className="containerInputs">
      <h1 className='tituloInput'>Registrar</h1>
      <Formik initialValues={{}}
      onSubmit={handleRegister}
      validationSchema={validationRegistro}>
      <Form className="formContainer">
        <div className="containerEmail">
        <Field name="email" className="emailInput inputs" placeholder="Digite seu email..."></Field>
        <ErrorMessage component="span"
          name="email"
          className="errorMessage"/>
        </div>
        <div className="containerPassword">
        <Field name="password" className="senhaInput inputs" placeholder="Digite sua senha..." type="password"></Field>
        <ErrorMessage component="span"
          name="password"
          className="errorMessage"/>
        </div>

        <div className="containerPassword">
        <Field name="confirmPassword" className="senhaInput inputs" placeholder="Confirme sua senha..." type="password"></Field>
        <ErrorMessage component="span"
          name="confirmPassword"
          className="errorMessage"/>
        </div>
        <button className="usuarioAutenticado" type='submit'>Registrar-se</button>
      </Form>
      </Formik>
    </div>
  </div>
  );
}

export default Home;
