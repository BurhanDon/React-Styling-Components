import logo from "../assets/logo.png";
// import classes from "./Header.module.css";
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

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;

  & img {
    object-fit: contain;
    margin-bottom: 2rem;
    width: 11rem;
    height: 11rem;
  }

  & h1 {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.4em;
    text-align: center;
    text-transform: uppercase;
    color: #9a3412;
    font-family: "Pacifico", cursive;
    margin: 0;
  }

  & p {
    text-align: center;
    color: #a39191;
    margin: 50;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;

    & h1 {
      font-size: 2.25rem;
    }
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      {/* <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton> */}
    </StyledHeader>
  );
}
