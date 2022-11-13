import { useState } from "react";

const Cards = (props) => {
  return (
    <>
      <p>{props.name}</p>
      <img src={props.imagemUrl} />
    </>
  );
};

export default Cards;
