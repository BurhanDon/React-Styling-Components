import logo from "../assets/logo.png";
import classes from "./Header.module.css";
import styled from "styled-components";

// const Button = styled.button`
//   color: #bf4f74;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid #bf4f74;
//   border-radius: 3px;
//   transition: color 5s ease;
// `;

// const TomatoButton = styled(Button)`
//   color: tomato;
//   border-color: tomato;
//   border-radius: 20px;
//   font-size: 1.2rem;
//   background-color: #bf2f24;
//   transition: background-color 0.5s ease, color 0.5s ease; /* Apply transitions */
//   transition-delay: 1s;
//   &:hover {
//     background-color: transparent;
//     color: #bf4f74;
//   }
// `;

export default function Header() {
  return (
    <header>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p className={classes.paragraph}>
        A community of artists and art-lovers.
      </p>
      {/* <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton> */}
    </header>
  );
}
