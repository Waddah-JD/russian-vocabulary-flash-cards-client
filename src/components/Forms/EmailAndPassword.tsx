import { Alert, AlertTitle, Button, styled, TextField } from "@mui/material";
import { FormEvent, useEffect, useState } from "react";
import { EmailAndPasswordFormErrorMessages } from "types/auth";

type Props = {
  email: string;
  handleEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  handlePasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  submitButtonLabel?: string;
  handleSubmitForm: () => Promise<void>;
  errorHandlerFn: (err: unknown) => { title: string; description: string };
};

function EmailAndPassword(props: Props): JSX.Element {
  const [errorMessages, setErrorMessages] = useState<EmailAndPasswordFormErrorMessages>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { email, handleEmailChange, password, handlePasswordChange, submitButtonLabel, handleSubmitForm } = props;
  const emailIsInvalid = validateEmail(email);
  const passwordIsInvalid = validatePassword(password);

  const [submitIsDisabled, setSubmitIsDisabled] = useState(emailIsInvalid || passwordIsInvalid);

  useEffect(() => {
    setSubmitIsDisabled(isSubmitting || emailIsInvalid || passwordIsInvalid);
  }, [isSubmitting, email, password]);

  async function handleSubmit(e: FormEvent): Promise<void> {
    e.preventDefault();

    if (submitIsDisabled) return;

    try {
      setIsSubmitting(true);
      await handleSubmitForm();
    } catch (error) {
      const errorMessagesObj = props.errorHandlerFn(error);
      setErrorMessages(errorMessagesObj);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      {errorMessages && <ErrorAlert {...errorMessages} />}
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
      <Button disabled={submitIsDisabled} type="submit" variant="contained" size="small">
        {isSubmitting ? "Submitting.." : submitButtonLabel || "submit"}
      </Button>
    </Form>
  );
}

function ErrorAlert(props: EmailAndPasswordFormErrorMessages): JSX.Element {
  return (
    <Alert severity="error">
      <AlertTitle>{props.title}</AlertTitle>
      {props.description}
    </Alert>
  );
}

function validateEmail(email: string): boolean {
  return email.length === 0 || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email);
}

function validatePassword(password: string): boolean {
  return password.length === 0;
}

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

export default EmailAndPassword;
