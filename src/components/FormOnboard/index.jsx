import { Container } from "@material-ui/core";
import ButtonSubmit from "../Button";
import FormEmailValidation from "./FormEmailValidation"
import FormAccountType from "./FormAccountType";
import FormCNPJForm from "./FormCNPJ";
import FormAdress from "./FormAdress"
import FormSocio from "./FormSocio";

// onSubmit={(event)=> {
//   event.preventDefault()
//   aoEnviar({})
// }}


export default function FormOnboard({aoEnviar, validaCPF}) {

  //const [errCpfErr,setCpfErr] = useState({cpfSocio:{valido: true, texto:""}});

    return (
        <form style={{ width: "800px",  display: "flex", flexDirection: "column", alignItems: "center" }} >
          
          <Container componet="article" maxWidth="sm" >
            <FormEmailValidation />
            <FormAccountType />
            <FormCNPJForm />
            <FormAdress />
            <FormSocio />
          </Container>
          
          <ButtonSubmit type="Submit">Enviar</ButtonSubmit>
        </form>
    )
    
}