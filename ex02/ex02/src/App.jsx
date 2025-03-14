import React, { useState } from "react";
import Dado from "./Dado";

function App() {
  const [valorDado, setValorDado] = useState(1);

  const rolarDado = () => {
    const novoValor = Math.floor(Math.random() * 6) + 1;
    setValorDado(novoValor);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> Jogue o Dado!</h1>
      <Dado valor={valorDado} />
      <button 
        onClick={rolarDado} 
        style={{ marginTop: "20px", fontSize: "16px", padding: "10px" }}>
        Rolar Dado 🎲
      </button>
    </div>
  );
}

export default App;
