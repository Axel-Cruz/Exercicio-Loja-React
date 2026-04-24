import "./Home.css";
import { useState, useEffect } from "react";
import { Link } from "react-router"; //Importando o link para criar o link para a chamar outras telas.


function Home() {
  const [anuncios, setAnuncios] = useState([]);

  function dividirValor(valor: number, parcelamento: number) {
    return (valor / parcelamento) .toFixed(2);
  }

  function formatarMensagem(anuncio: { nome: string; preco: number }) {
    return `
         Ola, eu tenho interesse no produto ${anuncio.nome} 
         no valor de ${anuncio.preco} 
   `;
  }
  // Essa função vai fazer o fetch para pegar os dados do backend, ou seja, do json server,
  // e depois vai setar os dados no estado anuncios.
  async function carregarAnuncios() {
    const resposta = await fetch("http://localhost:3000/anuncios");
    const dados = await resposta.json();
    // Depois de pegar os dados do backend, eu vou setar os dados no estado anuncios,
    // para que eu possa usar os dados para mostrar na tela.
    //a variavel dados vai pegar os dados do backend, ou seja, do json server,
    // e depois vai setar os dados no estado anuncios.
    setAnuncios(dados);
  }

  //Desse jeoto, a função carregarAnuncios vai ser chamada quando o componente for montado, 
  // ou seja, quando a tela for aberta, para que os dados sejam carregados e mostrados na tela.
  //Assim é usado para chamar a funcao na tela.
  useEffect(() => {
    carregarAnuncios();
  }, []);

  return (
    <div className="container_home">
      <div className="header_home_anuncios">
        <div>
          <h1>Anuncios em Destaque</h1>
          <p>Encontre colecionaveis, magas e acessorios do universo anime</p>
        </div>
        <Link to="/login">
          <button
            type="submit"
            className="botao_telas_iniciais header_home_anuncios_botao"
          >
            Quero Anunciar
          </button>
        </Link>
      </div>

      <div className="container_cards_anuncios" > 
        {anuncios.map((anuncio) => (
          <div className="card_home_anuncios" key={anuncio.id}>{/* O key é para dar uma chave única para cada elemento da lista, para que o React possa identificar qual elemento foi alterado, adicionado ou removido. */ }
            <img
              className="imagem_card_home_anuncios"
              src={anuncio.url}
              alt="imagem-de-bicicleta"
            />

            <div className="card_info_produto_home_anuncios">
              <h2>{anuncio.nome}</h2>
              <p>{anuncio.descricao}</p>
              <span>R$ {anuncio.preco}</span>
              <p className="card_parcelamento_produto_home_anuncios">
                Em até {anuncio.parcelamento}x de {dividirValor(anuncio.preco, anuncio.parcelamento)} sem juros
              </p>
              <a
                className="botao_telas_iniciais card_info_produto_botao"
                href={`https://wa.me/${anuncio.contato}?text=${encodeURIComponent(formatarMensagem(anuncio))}`}
                target="_blank"
              >
                Negociar
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Home; //Estou exportando para abrir em outra tela, no caso a main.tsx
