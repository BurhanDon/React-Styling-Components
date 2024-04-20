import { useState } from "react";
// import { styled } from "styled-components";
import Input from "./Input.jsx";
import Button from "./Button.jsx";

/*const ControlComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;*/

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

  let maindiv =
    "w-full max-w-sm p-8 mx-auto rounded shadow-md bg-gradient-to-b from-amber-600 to-amber-800";

  const emailNotValid = submitted && !enteredEmail.includes("@");
  const passwordNotValid = submitted && enteredPassword.trim().length < 4;

  return (
    <div id="auth-inputs" className={maindiv}>
      <div className="flex flex-col gap-2 mb-6">
        <Input
          label="email"
          type="email"
          // className={emailNotValid ? "$invalid" : undefined}
          invalid={emailNotValid}
          onChange={(event) => handleInputChange("email", event.target.value)}
        />
        <Input
          label="password"
          type="password"
          // style={{ backgroundColor: emailNotValid ? "#fed2d2" : "#d1d5db" }}
          // className={passwordNotValid ? "$invalid" : undefined}
          invalid={passwordNotValid}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
        />
      </div>
      <div className="flex justify-end gap-4">
        {/* <NewAccBtn type="button">Create a new account</NewAccBtn> */}
        <button
          className="text-amber-400 hover:text-amber-500"
          onClick={handleLogin}
        >
          Create an Account
        </button>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
