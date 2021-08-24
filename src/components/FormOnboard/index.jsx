import { Button, TextField, RadioGroup, FormControlLabel, Radio, Container, Typography } from "@material-ui/core";
import { GetAppOutlined} from '@material-ui/icons';
import { useState } from "react";

export default function FormOnboard({aoEnviar, validaCPF}) {
  const [emailClient,setEmailClient] = useState("");
  const [errEmailCli,seterrEmail] = useState({});
  const [helpEmail, setHelpEmailCli] = useState();
  const [codAcesso,setCodAcesso] = useState("");

  const [accountType,setAccountType] = useState("");

  const [botaoState,setBotaoState] = useState("");
  const [cpfCnpj,setCpfCnpj] = useState("");
  const [nomeRazao,setNomeRazao] = useState("");
  const [fantasiaPrefer,setFantasiaPrefer] = useState("");
  const [dataFund,setDataFund] = useState("");
  const [formaConstituicao,setFormaConstituicao] = useState("");
  const [faturamento,setFaturamento] = useState("");

  const [cep,setCep] = useState("");
  const [telefone,setTelefone] = useState("");
  const [cidade,setCidade] = useState("");
  const [logradouro,setLogradouro] = useState("");
  const [numero,setNumero] = useState("");
  const [bairro,setBairro] = useState("");
  const [complemento,setComplemento] = useState("");

  const [nomeSocio,setNomeSocio] = useState("");
  const [dataNascim,setDataNascim] = useState("");
  const [cpfSocio,setCpfSocio] = useState("");
  const [nomeMae,setNomeMae] = useState("");

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
            aoEnviar({emailClient, codAcesso, accountType, cpfCnpj, nomeRazao, fantasiaPrefer, dataFund, formaConstituicao, faturamento, cep, telefone, cidade, logradouro, numero, bairro, complemento})
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

          <Container componet="article" maxWidth="sm">
              <Typography variant="h5">Selecione o tipo de conta</Typography>
              <RadioGroup 
              checked={accountType}
              id="tipo_conta" 
              aria-label="Tipo de Conta" 
              name="accountType" 
              onClick={(event)=>{
                  setAccountType(event.target.checked);
                }}
              >

                <FormControlLabel 
                value="1"
                control={<Radio />} 
                label="Pessoa Física" 
                
                />
                <FormControlLabel 
                value="2" 
                control={<Radio />} 
                label="Pessoa Jurídica"  
                onClick={(event)=>{
                  setAccountType(event.target.checked);
                }}
                />
              </RadioGroup>
          </Container>

          <Container componet="article" maxWidth="sm" >
            <Typography variant="h5">Pacote de tarifas e serviços</Typography>
            <Button 
            id="doc_tarifa" 
            fullWidth>
                <GetAppOutlined/> Download
            </Button>
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

          <Container componet="article" maxWidth="sm" >
            <Typography margin="dense" variant="h5">Endereço da empresa</Typography>
            <TextField 
            value={cep}
            margin="dense" 
            id="text_cep" 
            variant="outlined" 
            label="CEP" 
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>{
              setCep( event.target.value)
            }}
            />
            <TextField 
            value={telefone}
            margin="dense" 
            id="telefone" 
            variant="outlined" 
            label="Telefone" 
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>{
              setTelefone( event.target.value)
            }}
            />
            <TextField 
            value={cidade}
            margin="dense" 
            id="text_cidade" 
            variant="outlined" 
            label="Cidade" 
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>{
              setCidade( event.target.value)
            }}
            />
            <TextField 
            value={logradouro}
            margin="dense" 
            id="text_logradouro" 
            variant="outlined" 
            label="Logradouro" 
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>{
              setLogradouro(event.target.value)
            }}
            />
            <TextField 
            value={numero}
            margin="dense" 
            id="text_num" 
            variant="outlined" 
            label="Número" 
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>{
              setNumero( event.target.value)
            }}
            />
            <TextField 
            value={bairro}
            margin="dense" 
            id="text_bairro" 
            variant="outlined" 
            label="Bairro" 
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>{
              setBairro( event.target.value)
            }}
            />
            <TextField 
            value={complemento}
            margin="dense" 
            id="text_complemento" 
            variant="outlined" 
            InputLabelProps={{ shrink: true }}
            onChange={(event) =>{
              setComplemento( event.target.value)
            }}
            />
            <TextField 
            value={emailClient}
            margin="dense" 
            id="text_email" 
            type="email" 
            variant="outlined" 
            label="E-mail" 
            InputLabelProps={{ shrink: true }}
             disabled 
             />
          </Container>

          <Container componet="article" maxWidth="sm" >
            <Typography variant="h5">Dados Sócio</Typography>
            <TextField 
              value={nomeSocio}
              margin="dense" 
              id="text_nomesocio" 
              variant="outlined" 
              label="Nome Completo" 
              InputLabelProps={{ shrink: true}}
              onChange={(event) =>{
                setNomeSocio(event.target.value)
                }}
            />
            <TextField 
              value={dataNascim}
              margin="dense" 
              id="data_datanascimento" 
              variant="outlined" 
              label="Data de nascimento" 
              InputLabelProps={{shrink: true}}
              onChange={(event) =>{
                setDataNascim(event.target.value)
              }}
            />
            <TextField 

              error={!errCpfErr.cpfSocio.valido}
              helperText={errCpfErr.cpfSocio.texto}
              value={cpfSocio}
              margin="dense" 
              id="text_cpf" 
              variant="outlined" 
              label="CPF" 
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>{
                setCpfSocio(event.target.value)
              }}
              onBlur={(event)=> {
                const isValid = validaCPF(cpfSocio);
                setCpfErr({cpfSocio: isValid})
              }}
              />
            <TextField 
              value={nomeMae}
              margin="dense" 
              id="text_nomemae" 
              variant="outlined" 
              label="Nome da mãe" 
              InputLabelProps={{ shrink: true }}
              onChange={(event) =>{
                setNomeMae(event.target.value)
              }}
              />
          </Container>
          
          <Button id="btn_submit" type="Submit">Enviar</Button>
        </form>
    )
    
}