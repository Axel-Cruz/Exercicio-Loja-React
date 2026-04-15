import "./Anuncios.css" // importa o css




function Anuncios() {
  return <div className="container_lista_anuncios">

    <h1>Meus Anuncios</h1>

    <table className="table_anuncios">
        <thead>
            <th>Id</th>
            <th>Nome</th>
            <th>Valor</th>
            <th>Situação</th>
            <th>Ações</th>
        </thead>
        <tbody>
            <tr>
                <td>Produto 1</td>
                <td>Action FIgure Mago Negro</td>
                <td>R$ 300</td>
                <td>Não publicado</td>
                <td></td>
            </tr>
        </tbody>
    </table>


  </div>;
}

export default Anuncios; //Estou exportando para abrir em outra tela, no caso a main.tsx
