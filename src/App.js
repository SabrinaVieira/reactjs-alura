import { Typography } from "@material-ui/core";
import "./App.css";
import FormOnboard from "./components/FormOnboard";
import HeaderPage from "./components/HeaderPage";
import FooterPage from "./components/FooterPage";

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpfSocio) {
  if (cpfSocio.length != 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export default function App() {
  return (
    <>
      <header>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <title>Cadastro</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=PT+Sans:wght@400;700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </header>
      <HeaderPage />
      <FormOnboard />
      <FooterPage />
    </>
  );
}
