import { TextField,Container, Typography } from "@material-ui/core";
import { useState } from "react";
import ButtonSubmit from "../Button";
import FormAccountType from "./FormAccountType";
import FormEmailValidation from "./FormEmailValidation"

export default function FormCPF({aoEnviar, validaCPF}) {

  const [botaoState,setBotaoState] = useState("");
  const [cpfCnpj,setCpfCnpj] = useState("");
  const [nomeRazao,setNomeRazao] = useState("");
  const [fantasiaPrefer,setFantasiaPrefer] = useState("");
  const [dataFund,setDataFund] = useState("");
  const [formaConstituicao,setFormaConstituicao] = useState("");
  const [faturamento,setFaturamento] = useState("");

  const [errCpfErr,setCpfErr] = useState({cpfSocio:{valido: true, texto:""}});

    return (
        <form style={{
          width: "800px", 
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center"
          }} 
          onSubmit={(event)=> {
            event.preventDefault()
            aoEnviar({cpfCnpj, nomeRazao, fantasiaPrefer, dataFund, formaConstituicao, faturamento })
          }}>

          <Container componet="article" maxWidth="sm" >
            <FormEmailValidation />
            <FormAccountType />
            
          </Container>

          <Container componet="article" maxWidth="sm" >
              <Typography variant="h5">Dados Cadastrais</Typography>
              <TextField 
              value={cpfCnpj}
              margin="dense" 
              id="text_cpfcnpj" 
              variant="outlined" 
              label="CNPJ" 
              InputLabelProps={{ shrink: true}} 
              onChange={(event) =>{
              setCpfCnpj( event.target.value)
            }}
              />
              <TextField 
              value={nomeRazao}
              margin="dense" 
              id="text_nomeRazao" 
              variant="outlined" 
              label="Razão Social" 
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>{
              setNomeRazao( event.target.value)
            }}
              />
              <TextField 
              value={fantasiaPrefer}
              margin="dense" 
              id="text_nomeFantPrefer" 
              variant="outlined" 
              label="Nome Fantasia" 
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>{
              setFantasiaPrefer( event.target.value)
            }}
              />
              <TextField 
              value={dataFund}
              margin="dense" 
              id="date_fundacao" 
              type="date" 
              variant="outlined" 
              label="Data de Fundação" 
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>{
              setDataFund( event.target.value)
            }}
              />
              <TextField 
              value={formaConstituicao}
              margin="dense" 
              id="text_formaconstituicao" 
              variant="outlined" 
              label="Forma de constituição" 
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>{
              setFormaConstituicao( event.target.value)
            }}
              />
              <TextField 
              value={faturamento}
              margin="dense" 
              id="text_faturamento" 
              variant="outlined" 
              label="Faturamento médio dos últimos 6 meses" 
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>{
              setFaturamento( event.target.value)
            }}
              />
            </Container>
          
          <ButtonSubmit type="Submit">Enviar</ButtonSubmit>
        </form>
    )
    
}