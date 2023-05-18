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
  return (
    <form>
      <input type="text" placeholder="email" value={email} onChange={handleEmailChange} />
      <input type="password" placeholder="password" value={password} onChange={handlePasswordChange} />
      <button type="button" onClick={handleSubmitForm}>
        {submitButtonLabel || "submit"}
      </button>
    </form>
  );
}

export default EmailAndPassword;
