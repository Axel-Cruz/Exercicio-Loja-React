import './CriarConta.css'; // importando o css para a tela de criar conta

//Sempre que for começar uma funcao comecar coma a letra maiuscula
function CriarConta() {
    return(
        <div className="container_telas_iniciais">
            <div className="container_esquerda_telas_iniciais">
        <h2>Crie sua Conta</h2>
        <p>Escolha seu plano e comece a anunciar hoje mesmo.</p>
      </div>

      <div className="container_direita_telas_iniciais">
        <h1>Cadrastro</h1>
        


      </div>
        </div>
    )
}

export default CriarConta; //Estou exportando para abrir em outra tela, no caso a main.tsx