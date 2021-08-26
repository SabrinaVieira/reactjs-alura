import { TextField, Container, Typography } from "@material-ui/core";
import { useState } from "react";
import ButtonSubmit from "../../Button";

export default function FormOnboard({ aoEnviar }) {
  const [cep, setCep] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cidade, setCidade] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");

  const [errCpfErr, setCpfErr] = useState({
    cpfSocio: { valido: true, texto: "" },
  });

  return (
    <form
      style={{
        width: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({
          cep,
          telefone,
          cidade,
          logradouro,
          numero,
          bairro,
          complemento,
        });
      }}
    >
      <Container>
        <Typography variant="h5">Endereço da empresa</Typography>
        <TextField
          value={cep}
          margin="dense"
          id="text_cep"
          variant="outlined"
          label="CEP"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setCep(event.target.value);
          }}
        />
        <TextField
          value={telefone}
          margin="dense"
          id="telefone"
          variant="outlined"
          label="Telefone"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setTelefone(event.target.value);
          }}
        />
        <TextField
          value={cidade}
          margin="dense"
          id="text_cidade"
          variant="outlined"
          label="Cidade"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setCidade(event.target.value);
          }}
        />
        <TextField
          value={logradouro}
          margin="dense"
          id="text_logradouro"
          variant="outlined"
          label="Logradouro"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setLogradouro(event.target.value);
          }}
        />
        <TextField
          value={numero}
          margin="dense"
          id="text_num"
          variant="outlined"
          label="Número"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setNumero(event.target.value);
          }}
        />
        <TextField
          value={bairro}
          margin="dense"
          id="text_bairro"
          variant="outlined"
          label="Bairro"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setBairro(event.target.value);
          }}
        />
        <TextField
          value={complemento}
          margin="dense"
          id="text_complemento"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setComplemento(event.target.value);
          }}
        />
      </Container>

      <ButtonSubmit type="Submit">Enviar</ButtonSubmit>
    </form>
  );
}
