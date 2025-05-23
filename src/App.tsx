import "./style.css";
import MyHeader from "./components/Header";
import MyButton from "./components/Button";

function App() {
  return (
    <>
    <MyHeader />
    <div className="about">
        <div className="text-content">
          <h1 className="tittle">HELLO & WELCOME!</h1>
          <h3 className="subtittle">
            I'm Gabriel Vitor Siqueira, a Front-End Developer passionate about UI design and turning ideas into code.
          </h3>
          <div className="Informations">
          <MyButton label="My Career"/>
          <MyButton label="Rsumé"/>
          </div>
        </div>
        <img src="/perfil.jpeg" alt="A man hair and moustache black." />
      </div>

    </>
  )
}

export default App
