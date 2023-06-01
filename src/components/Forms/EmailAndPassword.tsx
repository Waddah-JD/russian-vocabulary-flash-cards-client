import { Button, TextField } from "@mui/material";
import { FormEvent } from "react";

type Props = {
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitButtonLabel?: string;
  handleSubmitForm: () => void;
};

function EmailAndPassword(props: Props): JSX.Element {
  const { email, handleEmailChange, password, handlePasswordChange, submitButtonLabel, handleSubmitForm } = props;

  function handleSubmit(e: FormEvent): void {
    // TODO add validation: missing email and/or password ... etc
    e.preventDefault();
    handleSubmitForm();
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="email"
        size="small"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
      />
      <TextField
        type="password"
        size="small"
        label="Password"
        variant="outlined"
        value={password}
        onChange={handlePasswordChange}
      />
      <Button type="submit" variant="contained" size="small">
        {/* TODO add disable on validation / submitting .. etc */}
        {submitButtonLabel || "submit"}
      </Button>
    </form>
  );
}

export default EmailAndPassword;
