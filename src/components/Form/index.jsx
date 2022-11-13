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
      <h1>Cadastro de Campeões</h1>

      <form className="main-form">
        <label htmlFor="">Campeão </label>
        <input
          type="text"
          value={championName}
          onChange={(event) => setChampionName(event.target.value)}
          placeholder="Digite o nome do campeão"
        />

        <label htmlFor="">Imagem </label>
        <input
          value={championImage}
          onChange={(event) => setChampionImage(event.target.value)}
          placeholder="Digite a URL da imagem"
        />

        <button className="btn-submit" onClick={saveChampion}>
          ENVIAR
        </button>
      </form>
    </div>
  );
};

export default Form;
