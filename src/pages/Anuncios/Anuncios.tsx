import anuncios from "../../mock/data"; //importando os dados do mock para usar nessa tela.
import "./Anuncios.css"; // importa o css

function Anuncios() {

//Essa função para transfomado o valor em real.
    function formatarParaReal(valor : number) { // o number é o tipo do valor.
        return new Intl.NumberFormat("pt-BR", { // new Intl = é uma função pronta do javascript para formatar a moeda.
            style: 'currency', 
            currency: "BRL",
        }).format(valor);
    }

    return (
    <div className="container_lista_anuncios">
      <h1>Meus Anuncios</h1>

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
                src={anuncio.imagem}
              />
            </td>
            <td>{anuncio.nome}</td>
            <td>{formatarParaReal(anuncio.valor)}</td>
            <td>{anuncio.situacao === "PUBLICADO" ? "Publicado" : "Não publicado"}</td>
            <td></td>
          </tr>)}
          
        </tbody>
      </table>
    </div>
  );
}

export default Anuncios; //Estou exportando para abrir em outra tela, no caso a main.tsx
