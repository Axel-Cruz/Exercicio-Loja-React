import { useState, useEffect } from "react"; //USEEFFECT É PARA CARREGAR OS DADOS QUANDO A TELA FOR ABERTA, O USESTATE É PARA GUARDAR OS DADOS QUE VÃO CHEGAR DO BACKEND.

import "./Anuncios.css"; // importa o css
import { Link } from "react-router";

function Anuncios() {

  const [anuncios, setAnuncios] = useState([])

//Essa função para transfomado o valor em real.
    function formatarParaReal(valor : number) { // o number é o tipo do valor.
        return new Intl.NumberFormat("pt-BR", { // new Intl = é uma função pronta do javascript para formatar a moeda.
            style: 'currency', 
            currency: "BRL",
        }).format(valor);
    }

    async function carregarAnuncios() {
  const resposta = await fetch("http://localhost:3000/anuncios");
  const dados = await resposta.json();
  setAnuncios(dados);
}

//a funcao useEffect é para carregar os dados quando a tela for aberta, ou seja, quando o componente for montado. O array vazio [] é para dizer que a função só deve ser executada uma vez, quando o componente for montado.
useEffect(() =>{
carregarAnuncios();
}, [])

    return (
    <div className="container_lista_anuncios">
      <div className="header_lista_anuncios">
        
        <h1>Meus anúncios</h1>

        <Link
          className="botao_telas_iniciais botao_novo_anuncio"
          to="/anuncios/cadastro"
        >
          Novo anúncio
        </Link>
</div>

      <table className="table_anuncios">
        <thead>
          <th>Id</th>
          <th>Imagem</th>
          <th>Nome</th>
          <th>Valor</th>
          <th>Situação</th>
          <th>Ações</th>
        </thead>
        <tbody>
            {anuncios.map((anuncio ) =>  <tr>
            <td> {anuncio.id }</td>
            <td>
              <img width={40}
                src={anuncio.url}
              />
            </td>
            <td>{anuncio.nome}</td>
            <td>{formatarParaReal(anuncio.preco)}</td>
            <td>{anuncio.status === "PUBLICADO" ? "Publicado" : "Não publicado"}</td>
            <td></td>
          </tr>)}
          
        </tbody>
      </table>
    </div>
  );
}

export default Anuncios; //Estou exportando para abrir em outra tela, no caso a main.tsx
