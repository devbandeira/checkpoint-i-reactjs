import { useState } from "react";
import Cards from "./components/Cards/index";
import Form from "./components/Form";

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
      {champion.map((item) => {
        return <Cards name={item.name} imagemUrl={item.imagemUrl}/>;
      })}
    </>
  );
};

export default App;
