import { TfiMoney } from "react-icons/tfi";
import "./FormAnuncios.css";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { PiPhone } from "react-icons/pi";
import { BiPhotoAlbum } from "react-icons/bi";
import { useState } from "react";

function FormAnuncios() {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [contato, setContato] = useState("");
  const [imagem, setImagem] = useState("");
  const [parcela, setParcela] = useState("");

  function cadastrarAnuncio(e: React.SubmitEvent){
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do anúncio para o backend ou armazená-los localmente.
    // Por exemplo, você pode usar fetch para enviar os dados para uma API ou salvar no localStorage.
    fetch("http://localhost:3000/anuncios", {
      method: "post",
      body: JSON.stringify({
        nome: nome,
        url: imagem,
        preco: valor,
        descricao: descricao,
        parcelamento: parcela,
        contato: contato,
  
      }),
      headers: {
          "Content-Type": "application/json",
        },
   });
  }

  return (
    <div className="container_form_anuncios">
      <div className="esquerda_container_form_anuncios">
        <h1>Novo anuncio</h1>
        <h2>Cadastre anúncio agora mesmo !</h2>
        <p>
          Preencha os campos abaixo para montar um anúncio completo com nome,
          valor, descrição, contato, imagem e parcelamento.
        </p>
        <div className="preview_anuncio">
          <span>Prévia do anuncio</span>
          <span>{nome}</span>
          <span>R$ {valor}</span>
          <span>{descricao}</span>
          <span>
            Em ate {parcela}x de R$ ${valor}
          </span>
          <span>{contato}</span>
        </div>
      </div>

      <form onSubmit={cadastrarAnuncio} className="direita_container_form_anuncios">
        <div className="containers_inputs">
          <div style={{ width: "50%" }}>
            <label>Nome</label>
            <div className="container_input" style={{ width: "100%" }}>
              <GiCardboardBoxClosed color="#7a4df4" size={20} />
              <input value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
          </div>

          <div style={{ width: "50%" }}>
            <label>Valor</label>
            <div className="container_input" style={{ width: "100%" }}>
              <TfiMoney color="#7a4df4" size={20} />
              <input value={valor} onChange={(e) => setValor(e.target.value)} />
            </div>
          </div>
        </div>

        <div style={{ width: "100%" }}>
          <label>Descricao</label>
          <div className="container_input" style={{ width: "100%" }}>
            <TfiMoney color="#7a4df4" size={20} />
            <input
              value={descricao}
              onChange={(e) => setDescricao(e.target.value)}
            />
          </div>
        </div>

        <div className="containers_inputs">
          <div style={{ width: "50%" }}>
            <label>Contato</label>
            <div className="container_input" style={{ width: "100%" }}>
              <PiPhone color="#7a4df4" size={20} />
              <input
                value={contato}
                onChange={(e) => setContato(e.target.value)}
              />
            </div>
          </div>

          <div style={{ width: "50%" }}>
            <label>Imagem</label>
            <div className="container_input" style={{ width: "100%" }}>
              <BiPhotoAlbum color="#7a4df4" size={20} />
              <input
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
              />
            </div>
          </div>
        </div>

        <label>Parcelamento</label>
        <div className="container_select">
          <select value={parcela} onChange={(e) => setParcela(e.target.value)}>
            <option value="">Escolha a quantidade de parcelas</option>
            <option value="1">1x</option>
            <option value="2">2x</option>
            <option value="3">3x</option>
            <option value="4">4x</option>
            <option value="5">5x</option>
            <option value="6">6x</option>
            <option value="7">7x</option>
            <option value="8">8x</option>
            <option value="9">9x</option>
            <option value="10">10x</option>
            <option value="11">11x</option>
            <option value="12">12x</option>
          </select>
        </div>
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default FormAnuncios;