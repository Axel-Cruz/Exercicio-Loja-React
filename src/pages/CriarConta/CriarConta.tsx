import { useState } from "react"; 
// useState é um Hook do React. Ele permite criar variáveis que "guardam estado" no componente.
// Sempre que o estado muda, o React atualiza a interface automaticamente.

import { FaRegUser } from "react-icons/fa"; // Ícone de usuário
import { MdOutlineEmail } from "react-icons/md"; // Ícone de e-mail
import { RiLockPasswordLine } from "react-icons/ri"; // Ícone de senha
import "./CriarConta.css"; // Importa os estilos específicos desta página

import Swal from "sweetalert2"; 
// Biblioteca para mostrar mensagens visuais (pop-ups) bonitas e amigáveis ao usuário.

import { useNavigate } from "react-router"; // Caminho para navegar entre páginas 

// Em React, todo componente deve começar com letra maiúscula.
// Um componente é uma função que retorna o que será exibido na tela (JSX).
function CriarConta() {

  // ============================
  // ESTADOS (dados do formulário)
  // ============================
  // Cada useState guarda o valor digitado pelo usuário.
  // Formato: [valorAtual, funçãoQueAtualiza]

  const [nome, setNome] = useState(""); // Guarda o nome digitado
  const [email, setEmail] = useState(""); // Guarda o e-mail digitado
  const [senha, setSenha] = useState(""); // Guarda a senha digitada
  const [plano, setPlano] = useState(""); // Guarda o plano selecionado

  const navegar = useNavigate(); // Caminho para navegar para outras páginas após o cadastro

  // ======================================
  // FUNÇÃO EXECUTADA AO ENVIAR O FORMULÁRIO
  // ======================================
  async function cadastrar(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); 
    // Evita o comportamento padrão do formulário (recarregar a página).

    try {
      // Faz uma requisição para o backend enviando os dados digitados
      const resposta = await fetch("http://localhost:3000/auth/register", {
        method: "POST", // Método HTTP para enviar dados
        headers: {
          "Content-Type": "application/json", // Informando que estamos enviando JSON
        },
        body: JSON.stringify({
          name: nome,
          email: email,
          password: senha,
          plan: plano,
        }),
      });

      // Se a resposta do servidor não for OK (status 200–299), gera erro
      if (!resposta.ok) {
        const dadosError = await resposta.json(); // Tenta ler a mensagem de erro do servidor
        throw new Error(dadosError.error);
      }

      // Caso tudo dê certo, exibe mensagem de sucesso
      Swal.fire({
        icon: "success",
        title: "Conta Criada",
        text: "Agora você pode fazer login e aproveitar a plataforma.",
        confirmButtonText: "Beleza!",
      });

      //Navegar de volta para tela de login.
      navegar("/")

      // Opcional: limpar o formulário após o cadastro
      setNome("");
      setEmail("");
      setSenha("");
      setPlano("");

    } catch (_error) {
      // Se algo der errado, mostra mensagem de erro
      Swal.fire({
        icon: "error",
        title: "Ops...",
        text: "Não foi possível cadastrar no momento. Tente novamente.",
      });
    }
  }

  // ========================
  // INTERFACE (JSX)
  // ========================
  // JSX é parecido com HTML, mas permite usar variáveis e lógica JavaScript dentro.
  return (
    <div className="container_telas_iniciais">

      {/* Área lateral esquerda (informativa) */}
      <div className="container_esquerda_telas_iniciais">
        <h2>Crie sua Conta</h2>
        <p>Escolha seu plano e comece a anunciar hoje mesmo.</p>
      </div>

      {/* Formulário de cadastro */}
      <form onSubmit={cadastrar} className="container_direita_telas_iniciais">
        <h1>Cadastro</h1>

        {/* Campo de nome */}
        <div className="container_input">
          <FaRegUser color="#ccc" size={20} />
          <input
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        {/* Campo de e-mail */}
        <div className="container_input">
          <MdOutlineEmail color="#ccc" size={20} />
          <input
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Campo de senha */}
        <div className="container_input">
          <RiLockPasswordLine color="#ccc" size={20} />
          <input
            type="password" // Tipo senha oculta os caracteres
            placeholder="Senha"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>

        {/* Seleção do plano */}
        <div className="container_select">
          <select
            required
            value={plano}
            onChange={(e) => setPlano(e.target.value)}
          >
            <option value="">Selecione um plano</option>
            <option value="Gratuito">Gratuito - 10 anúncios por mês</option>
            <option value="Bronze">Bronze - 20 anúncios por mês</option>
            <option value="Prata">Prata - 50 anúncios por mês</option>
            <option value="Ouro">Ouro - anúncios ilimitados</option>
          </select>
        </div>

        {/* Botão de envio */}
        <button type="submit" className="botao_telas_iniciais">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

// Exporta o componente para que ele possa ser usado em outros arquivos (ex: rotas ou páginas).
export default CriarConta;