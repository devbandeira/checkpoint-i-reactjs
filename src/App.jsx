import { useState } from "react";
import Cards from "./components/Cards/index";
import Form from "./components/Form";
import "./style.css";

const App = () => {
  const [champion, setChampion] = useState([]);

  const salvarCampeao = (campeao) => {
    setChampion([
      ...champion,
      { name: campeao.name, imagemUrl: campeao.imagemUrl },
    ]);
  };

  return (
    <>
      <Form salvarCampeao={salvarCampeao} />
      <div className="div-app">
      {champion.map((item) => {
        return <Cards name={item.name} imagemUrl={item.imagemUrl}/>;
      })}
      </div>
    </>
  );
};

export default App;
