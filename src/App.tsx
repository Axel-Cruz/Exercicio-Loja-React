import "./App.css"; //importando o css para o app

//Para usar os icones do react-icons, primeiro tem que instalar a biblioteca com o comando npm install react-icons
//depois é só importar o icone que deseja usar, no caso o FaRegUser e o RiLockPasswordLine
import { FaRegUser } from "react-icons/fa"; //Importando o icone do usuario para o input
import { RiLockPasswordLine } from "react-icons/ri"; //Importando o icone password para o input

function App() {
  // agora mudou o class para className para chamar no css
  // Para mudar o tamanho e a cor do icone escreve assim <FaRegUser color="#ccc" size={20} />
  return (
    <div className="container_telas_iniciais">
      <div className="container_esquerda_telas_iniciais">
        <h2>Welcome Back</h2>
        <p>you can sign in to acess with yout existing account.</p>
      </div>
      <div className="container_direita_telas_iniciais">
        <h1>Sign In</h1>

        <div className="container_input">
          <FaRegUser color="#ccc" size={20} />
          <input placeholder="User or Email" />
        </div>
        <div className="container_input">
          <RiLockPasswordLine color="#ccc" size={20} />
          <input placeholder="Password" />
        </div>

        <button className="botao_logar">Sign In</button>

        <p>
          New Here ?{" "}
          <a href="" className="link_criar_conta">
            {" "}
            Create an account{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default App; //Estou exportando para abrir em outra tela, no caso a main.tsx
