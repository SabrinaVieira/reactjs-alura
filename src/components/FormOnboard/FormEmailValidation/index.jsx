import { Button, TextField, RadioGroup, FormControlLabel, Radio, Container, Typography } from "@material-ui/core";
import { GetAppOutlined} from '@material-ui/icons';
import { useState } from "react";

export default function FormFirstStep({aoEnviar}) {
  const [emailClient,setEmailClient] = useState("");
  const [errEmailCli,seterrEmail] = useState({});
  const [helpEmail, setHelpEmailCli] = useState();
  const [codAcesso,setCodAcesso] = useState("");

  const [botaoState,setBotaoState] = useState("");
  const [errEmailCli,seterrEmail] = useState({cpfSocio:{valido: true, texto:""}});

    return (
        <form style={{
          width: "800px", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center"
          }} 
          onSubmit={(event)=> {
            event.preventDefault()
            aoEnviar({emailClient, codAcesso})
          }}>

          <Container componet="article" maxWidth="sm" >
            <Typography variant="h5">Informe um endereço de e-mail</Typography>

            <TextField 
            error={errEmailCli}
            helperText={helpEmail}
            value={emailClient}
            id="email_cliente"
            variant="outlined"
            label="E-mail"
            margin="dense" 
            InputLabelProps={{shrink: true}}
            onChange={(event) =>{
              setEmailClient( event.target.value)
            }}
            />

            <Typography variant="h5">
              Enviamos um código de validação para seu email
            </Typography>

            <TextField 
            value={codAcesso}
            id="cod_acesso" 
            variant="outlined" 
            label="Código de acesso" 
            margin="dense"
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>{
              setCodAcesso(event.target.value)
            }}
            />
            
          </Container>

          <Container componet="article" maxWidth="sm" >
            <Typography variant="h5">Pacote de tarifas e serviços</Typography>
            <Button 
            id="doc_tarifa" 
            fullWidth>
                <GetAppOutlined/> Download
            </Button>
          </Container>
          
          <ButtonSubmit />
        </form>
    )
    
}