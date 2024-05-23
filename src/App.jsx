import AuthInputs from "./components/AuthInputs.jsx";
import Header from "./components/Header.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
      <p id="app-p">
        Developed by
        <a target="_blank" href="https://www.linkedin.com/in/burhan-siraj/">
          {" "}
          Burhan Uddin
        </a>
      </p>
    </>
  );
}
