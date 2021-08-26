import { Button } from "@material-ui/core";

export interface IButton {
  labeltxt: string;
}

export default function ButtonSubmit(labeltext: IButton) {
  return (
    <Button id="btn_submit" variant="contained">
      {labeltext}
    </Button>
  );
}
