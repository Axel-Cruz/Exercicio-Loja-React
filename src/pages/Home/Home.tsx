import "./Home.css"

 import {Link} from "react-router" //Importando o link para criar o link para a chamar outras telas.

function Home(){

    return <div className="container_home">
    <div className="header_home_anuncios">
    <div> 
    <h1 >Anuncios em Destaque</h1>
    <p>Encontre colecionaveis, magas e acessorios do universo anime</p>
    
</div>
<Link to="/login"> 
<button type="submit" className="botao_telas_iniciais header_home_anuncios_botao">Quero Anunciar</button>
</Link>
 </div>
 <div className="item_anuncio">

 </div>
    </div>
}




export default Home; //Estou exportando para abrir em outra tela, no caso a main.tsx
