import { useState } from "react";
import "./style.css";

const Cards = (props) => {
  return (
    <>
      <div className="div-card">
        <div className="div-img">
      <img src={props.imagemUrl} />
      </div>
      <p>{props.name}</p>
      </div>
    </>
  );
};

export default Cards;
