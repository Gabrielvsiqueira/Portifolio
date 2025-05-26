import "./style.css";
import MyHeader from "./components/Header";
import MyButton from "./components/Button";
import { Github, Instagram, Linkedin, Youtube} from 'lucide-react';

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

          <div className="informations">
            <div className="buttons-information">
              <MyButton label="My Career" className="my-button" onClick={() => window.open('https://www.linkedin.com/in/gabriel-vitor-siqueira/','_blank')}/>
              <MyButton label="Resumé" className="my-button" onClick={() => window.open('../public/resume.pdf', '_blank')}/>
            </div>

            <div className="icon-information">
              <MyButton icon={<Github size={20} />} className="my-button" onClick={() => window.open('https://github.com/Gabrielvsiqueira', '_blank')} />
              <MyButton icon={<Linkedin size={20} />} className="my-button" onClick={() => window.open('https://www.linkedin.com/in/gabriel-vitor-siqueira/',     '_blank')} />
              <MyButton icon={<Instagram size={20} />} className="my-button" onClick={() => window.open('https://www.instagram.com/siqueiragv/', '_blank')} />
              <MyButton icon={<Youtube size={20} />} className="my-button" onClick={() => window.open('https://www.youtube.com/@siqueiragv', '_blank')} />
            </div>
          </div>

        </div>
        <img src="../public/perfil.png" alt="A man hair and moustache black." />
      </div>

    </>
  )
}

export default App
