import { Button, styled, TextField } from "@mui/material";
import { FormEvent } from "react";

type Props = {
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitButtonLabel?: string;
  handleSubmitForm: () => void;
};

const Form = styled("form")(({ theme }) => {
  return {
    display: "flex",
    flexDirection: "column",
    maxWidth: "400px",
    margin: "0 auto",
    alignItems: "flex-end",
    border: `1px solid ${theme.palette.grey["A400"]}`,
    borderRadius: "8px",
    padding: "16px",
    gap: "16px",
  };
});

const FormField = styled(TextField)(() => {
  return {
    width: "100%",
  };
});

function EmailAndPassword(props: Props): JSX.Element {
  const { email, handleEmailChange, password, handlePasswordChange, submitButtonLabel, handleSubmitForm } = props;

  function handleSubmit(e: FormEvent): void {
    // TODO add validation: missing email and/or password ... etc
    e.preventDefault();
    handleSubmitForm();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        type="email"
        size="small"
        label="Email"
        variant="outlined"
        value={email}
        onChange={handleEmailChange}
      />
      <FormField
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
    </Form>
  );
}

export default EmailAndPassword;
