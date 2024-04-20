import { useState } from "react";
import { styled } from "styled-components";
import Input from "./Input.jsx";

const ControlComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-weight: 600;
  text-transform: uppercase;
  border-radius: 0.25rem;
  color: #1f2937;
  background-color: #f0b322;
  border-radius: 6px;
  border: none;
  @media (max-width: 375px) {
    font-size: 11px;
    padding: 1px 1px;
  }
  &:hover {
    background-color: #f0920e;
    cursor: pointer;
  }
`;
const NewAccBtn = styled(Button)`
  cursor: pointer;
  background: none;
  line-height: inherit;
  color: #f0b322;
  border: none;
  &:hover {
    // background-color: none;
    background: none;
    color: #ffd152;
  }
  &:focus {
    outline: none;
  }
`;

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === "email") {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 4;

  return (
    <div id="auth-inputs">
      <ControlComponent>
        <Input
          label="email"
          type="email"
          // className={emailNotValid ? "$invalid" : undefined}
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <Input
          type="password"
          label="password"
          // style={{ backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db" }}
          // className={passwordNotValid ? "$invalid" : undefined}
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </ControlComponent>
      <div className="actions">
        <NewAccBtn type="button">Create a new account</NewAccBtn>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
