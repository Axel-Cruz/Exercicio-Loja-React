import { useState } from "react"; //importando o useState para criar variaveis de estado dentro do componente

import { FaRegUser } from "react-icons/fa";
import "./CriarConta.css"; // importando o css para a tela de criar conta
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";

/* useState -> perimite que voce crie uma variavel de estado dentro do componente.*/

//Sempre que for começar uma funcao comecar coma a letra maiuscula
function CriarConta() {
  const [nome, setNome] = useState(""); //criando uma variavel de estado para armazenar o valor do input de nome, o valor inicial é uma string vazia
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  //Função que vai ser chamada quando o usuario clicar no botao de cadastrar ou quando o formulario for submetido
  function cadastrar(event: React.SubmitEvent) {
    event.preventDefault(); //evitar que a pagina seja recarregada
    console.log(nome); //vai mostrar no console o valor do input de nome.
    console.log(email); //vai mostrar no console o valor do input de email.
    console.log(senha); //vai mostrar no console o valor do input de senha.
  }

  //Função que vai ser chamada quando o usuario digitar algo no input de nome.
  function alterarNome(event: any) {
    setNome(event.target.value); //vai mostrar no console o valor do input de nome.
    // vai atualizar a variavel setNome com o valor do input de nome.
  }
  //Função que vai ser chamada quando o usuario digitar algo no input de email.
  function alterarEmail(event: any) {
    setEmail(event.target.value); //vai mostrar no console o valor do input de email.
    // vai atualizar a variavel setEmail com o valor do input de email.
  }

  //Função que vai ser chamada quando o usuario digitar algo no input de senha.
  function alterarSenha(event: any) {
    setSenha(event.target.value); //vai mostrar no console o valor do input de senha.
    // vai atualizar a variavel setSenha com o valor do input de senha.
  }

  return (
    <div className="container_telas_iniciais">
      <div className="container_esquerda_telas_iniciais">
        <h2>Crie sua Conta</h2>
        <p>Escolha seu plano e comece a anunciar hoje mesmo.</p>
      </div>

      <form onSubmit={cadastrar} className="container_direita_telas_iniciais">
        <h1>Cadrastro</h1>
        <div className="container_input">
          <FaRegUser color="#ccc" size={20} />
          <input
            placeholder="Nome"
            required
            value={nome}
            onChange={alterarNome}
          />
        </div>
        <div className="container_input">
          <MdOutlineEmail color="#ccc" size={20} />
          <input
            placeholder="User or Email"
            required
            value={email}
            onChange={alterarEmail}
          />
        </div>
        <div className="container_input">
          <RiLockPasswordLine color="#ccc" size={20} />
          <input
            placeholder="Passaword"
            required
            value={senha}
            onChange={alterarSenha}
          />
        </div>
        <div className="container_select">
          <select required >
            <option>Selecione uma opção </option>
            <option value="Gratuito"> Gratuito - 10 Anuncios por mês</option>
            <option value="Bronze"> Bronze - 20 Anuncios por mês</option>
            <option value="Prata"> Prata - 50 Anuncios por mês</option>
            <option value="Ouro"> Ouro - Anuncios Ilimitados</option>
          </select>
        </div>
        <button type="submit" className="botao_telas_iniciais">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default CriarConta; //Estou exportando para abrir em outra tela, no caso a main.tsx
