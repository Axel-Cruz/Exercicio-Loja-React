import { useState } from "react"; // para usar para variaveis estaticas
import "./Login.css"; //importando o css para o app

//Para usar os icones do react-icons, primeiro tem que instalar a biblioteca com o comando npm install react-icons
//depois é só importar o icone que deseja usar, no caso o FaRegUser e o RiLockPasswordLine
import { FaRegUser } from "react-icons/fa"; //Importando o icone do usuario para o input
import { RiLockPasswordLine } from "react-icons/ri"; //Importando o icone password para o input
import Swal from "sweetalert2";
import {Link, useNavigate} from "react-router" //Importando o link para criar o link para a chamar outras telas.

function Login() {
  // agora mudou o class para className para chamar no css
  // Para mudar o tamanho e a cor do icone escreve assim <FaRegUser color="#ccc" size={20} />

  // Criando estados
  //Para importat o useState é so clicar ctrl+space e clicar em import useState from 'react'
  const [email, setEmail] = useState(""); // as "" vazias sao que o valor inicial é vazio
  const [passaword, setPassaword] = useState("");

  const navegar = useNavigate(); // para navegar para outra tela apos o login
  
  // Função de submit
  //try é para ele tentar fazer o login, se der certo ele vai mostrar a mensagem de usuario encontrado
 async function fazerLogin(event: React.SubmitEvent) {

  try{
     event.preventDefault(); // impede recarregar a página
    // aqui esta levando para o local que faz o login na APi, o body é o que esta sendo enviado para a API, no caso o email e a senha.
    const resposta = await fetch("http://localhost:3000/auth/login", {
      method: "post",
      body: JSON.stringify({
        email: email,
        password: passaword,
      }),
      headers:{
        "content-type": "application/json"
      },
    });
  
  if(resposta.ok === false){
    throw new Error();
  }
  Swal.fire({
    icon: "info",
    title: "Usuario encontrado",
    text:"Seu Usuario foi encontrado e voce ja será redirecionado",
  });

//Navegar para a tela de anuncios
//so chamar a variavel que foi criada para navegar e colocar o caminho da tela que deseja navegar.
navegar("/anuncios");

  } catch {
Swal.fire({
    icon: "error", // aqui ele vai mostrar o icone de erro
    title: "Erro",
    text:"Credenciais inválidas",
  })
  };
 }
  return (
    <div className="container_telas_iniciais">
      <div className="container_esquerda_telas_iniciais">
        <h2>Welcome Back</h2>
        <p>you can sign in to acess with yout existing account.</p>
      </div>
      {/* o onSubmit vai retornar a funcao de fazerLogin */}
      <form className="container_direita_telas_iniciais" onSubmit={fazerLogin}>
        <h1>Sign In</h1>
        {/* O value ele vai definir o valor do input */}
        {/* O onChange ele salva tudo o que o usuario digita */}
        <div className="container_input">
          <FaRegUser color="#ccc" size={20} />
          <input
            placeholder="User or Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="container_input">
          <RiLockPasswordLine color="#ccc" size={20} />
          <input
            placeholder="Password"
            value={passaword}
            onChange={(e) => setPassaword(e.target.value)}
          />
        </div>

        <button type="submit" className="botao_telas_iniciais">
          Sign In
        </button>

        <p>
          New Here ?{" "}
          <Link to="/criar-conta" className="link_criar_conta">
            Create an account
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login; //Estou exportando para abrir em outra tela, no caso a main.tsx
