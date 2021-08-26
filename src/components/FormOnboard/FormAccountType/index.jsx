import {
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Container,
  Typography,
} from "@material-ui/core";
import { GetAppOutlined } from "@material-ui/icons";
import { useState } from "react";
import ButtonSubmit from "../../Button";

export default function FormAccountType({ aoEnviar }) {
  const [accountType, setAccountType] = useState("");

  const [botaoState, setBotaoState] = useState("");

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
        aoEnviar({ accountType });
      }}
    >
      <Container>
        <Typography variant="h5">Selecione o tipo de conta</Typography>
        <RadioGroup
          value={accountType}
          id="tipo_conta"
          aria-label="Tipo de Conta"
          onClick={(event) => {
            setAccountType(event.target.value);
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
          />
        </RadioGroup>

        <Typography variant="h5">Pacote de tarifas e serviços</Typography>
        <Button id="doc_tarifa" fullWidth>
          <GetAppOutlined /> Download
        </Button>
      </Container>

      <ButtonSubmit />
    </form>
  );
}
