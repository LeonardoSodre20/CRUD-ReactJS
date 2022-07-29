import './App.css';
import { Formik, Form , Field , ErrorMessage } from 'formik'
import * as yup from 'yup'
import Axios from 'axios'

function App() {

  const handleClickRegistro = values => {
    Axios.post("https://localhost:3001/registro", {
      email: values.email,
      password: values.password
    }).then(response => {
      console.log(response)
    })
  }

  const handleClickLogin = values => {
    console.log(values)
  }

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
              onSubmit={handleClickLogin}
              validationSchema={validationLogin}>
              <Form className="formContainer">
                <div className="containerEmail">
                <Field name="email" className="emailInput inputs" placeholder="Digite seu email..."></Field>
                <ErrorMessage component="span"
                  name="email"
                  className="errorMessageEmail"/>
                </div>
                <div className="containerPassword">
                <Field name="password" className="senhaInput inputs" placeholder="Digite sua senha..." type="password"></Field>
                <ErrorMessage component="span"
                  name="password"
                  className="errorMessagePassword"/>
                </div>
                <button className="usuarioAutenticado" type='submit'>Login</button>
              </Form>
              </Formik>
            </div>

            <div className="containerInputs">
              <h1 className='tituloInput'>Registrar</h1>
              <Formik initialValues={{}}
              onSubmit={handleClickRegistro}
              validationSchema={validationRegistro}>
              <Form className="formContainer">
                <div className="containerEmail">
                <Field name="email" className="emailInput inputs" placeholder="Digite seu email..."></Field>
                <ErrorMessage component="span"
                  name="email"
                  className="errorMessageEmail"/>
                </div>
                <div className="containerPassword">
                <Field name="password" className="senhaInput inputs" placeholder="Digite sua senha..." type="password"></Field>
                <ErrorMessage component="span"
                  name="password"
                  className="errorMessagePassword"/>
                </div>

                <div className="containerPassword">
                <Field name="confirmPassword" className="senhaInput inputs" placeholder="Confirme sua senha..." type="password"></Field>
                <ErrorMessage component="span"
                  name="confirmPassword"
                  className="errorMessagePassword"/>
                </div>
                <button className="usuarioAutenticado" type='submit'>Registrar-se</button>
              </Form>
              </Formik>
            </div>
          </div>
  );
}

export default App;
