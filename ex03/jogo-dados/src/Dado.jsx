import React from "react";

const Dado = ({ valor, jogar, jogador }) => {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Jogador {jogador}</h2>
      <div
        style={{
          fontSize: "50px",
          border: "2px solid black",
          padding: "20px",
          display: "inline-block",
          width: "80px",
        }}
      >
        {valor}
      </div>
      <br />
      <button onClick={jogar} style={{ marginTop: "10px", padding: "10px" }}>
        Rolar Dado
      </button>
    </div>
  );
};

export default Dado;
