import { TextField, Container, Typography } from "@material-ui/core";
import { useState } from "react";
import ButtonSubmit from "../../Button";

export default function FormSocio({ aoEnviar }) {
  const [nomeSocio, setNomeSocio] = useState("");
  const [dataNascim, setDataNascim] = useState("");
  const [cpfSocio, setCpfSocio] = useState("");
  const [nomeMae, setNomeMae] = useState("");

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
          nomeSocio,
          dataNascim,
          cpfSocio,
          nomeMae,
        });
      }}
    >
      <Container componet="article">
        <Typography variant="h5">Dados Sócio</Typography>
        <TextField
          value={nomeSocio}
          margin="dense"
          id="text_nomesocio"
          variant="outlined"
          label="Nome Completo"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setNomeSocio(event.target.value);
          }}
        />
        <TextField
          value={dataNascim}
          margin="dense"
          id="data_datanascimento"
          variant="outlined"
          label="Data de nascimento"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setDataNascim(event.target.value);
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
          onChange={(event) => {
            setCpfSocio(event.target.value);
          }}
          onBlur={(event) => {
            const isValid = validaCPF(cpfSocio);
            setCpfErr({ cpfSocio: isValid });
          }}
        />
        <TextField
          value={nomeMae}
          margin="dense"
          id="text_nomemae"
          variant="outlined"
          label="Nome da mãe"
          InputLabelProps={{ shrink: true }}
          onChange={(event) => {
            setNomeMae(event.target.value);
          }}
        />
      </Container>

      <ButtonSubmit type="Submit">Enviar</ButtonSubmit>
    </form>
  );
}
