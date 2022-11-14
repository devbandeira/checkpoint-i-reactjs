import { useState } from "react";
import "./style.css";

const Form = ({ salvarCampeao }) => {
  const [championName, setChampionName] = useState("");
  const [championImage, setChampionImage] = useState("");

  const saveChampion = (event) => {
    event.preventDefault();

    if (championName == "" || championImage == "") {
      alert("Preecha todos os campos para salvar");
    } else {
      salvarCampeao({ name: championName, imagemUrl: championImage });
    }
  };

  return (
    <div className="dad-div">
      <div className="h1-div">
        <p className="main-p">
          <a
            href="https://www.leagueoflegends.com/pt-br/champions/"
            target="_blank"
          >
            CLIQUE AQUI PARA VER A LISTA DE CAMPEÕES
          </a>
        </p>
        <h1>CADASTRO DE CAMPEÕES</h1>
      </div>

        <form className="main-form">
          <label htmlFor="">NOME DO CAMPEÃO </label>
          <input
            type="text"
            value={championName}
            onChange={(event) => setChampionName(event.target.value)}
            placeholder="Insira o nome do campeão"
          />

          <label htmlFor=""> IMAGEM DO CAMPEÃO </label>
          <input
            value={championImage}
            onChange={(event) => setChampionImage(event.target.value)}
            placeholder="Insira a URL da imagem"
          />

          <button className="btn-submit" onClick={saveChampion}>
            ENVIAR
          </button>
        </form>
    </div>
  );
};

export default Form;
