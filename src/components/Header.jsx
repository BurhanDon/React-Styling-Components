import logo from "../assets/logo.png";




export default function Header() {
  return (
    <header className="flex felx-col mt-8 mb-16 items-center">
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      {/* <Button>Normal Button</Button>
      <TomatoButton>Tomato Button</TomatoButton> */}
    </header>
  );
}
