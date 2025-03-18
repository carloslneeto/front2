import React, { useState } from "react";
import Dado from "./Dado";

const Jogo = () => {
  const [rodada, setRodada] = useState(1);
  const [placar, setPlacar] = useState({ jogador1: 0, jogador2: 0 });
  const [dado1, setDado1] = useState(null);
  const [dado2, setDado2] = useState(null);
  const [turno, setTurno] = useState(1);
  const [vencedor, setVencedor] = useState(null);

  const jogarDado = () => Math.floor(Math.random() * 6) + 1;

  const jogar = () => {
    if (turno === 1) {
      setDado1(jogarDado());
      setTurno(2);
    } else {
      const novoDado2 = jogarDado();
      setDado2(novoDado2);
      definirVencedor(dado1, novoDado2);
    }
  };

  const definirVencedor = (valor1, valor2) => {
    let novoPlacar = { ...placar };

    if (valor1 > valor2) {
      novoPlacar.jogador1 += 1;
    } else if (valor2 > valor1) {
      novoPlacar.jogador2 += 1;
    }

    setPlacar(novoPlacar);

    if (rodada === 5) {
      if (novoPlacar.jogador1 > novoPlacar.jogador2) {
        setVencedor("Jogador 1 venceu!");
      } else if (novoPlacar.jogador2 > novoPlacar.jogador1) {
        setVencedor("Jogador 2 venceu!");
      } else {
        setVencedor("Empate!");
      }
    } else {
      setRodada(rodada + 1);
      setTurno(1);
    }
  };

  const resetarJogo = () => {
    setRodada(1);
    setPlacar({ jogador1: 0, jogador2: 0 });
    setDado1(null);
    setDado2(null);
    setTurno(1);
    setVencedor(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Jogo de Dados</h1>
      <h2>Rodada {rodada} de 5</h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Dado valor={dado1} jogar={turno === 1 ? jogar : null} jogador={1} />
        <Dado valor={dado2} jogar={turno === 2 ? jogar : null} jogador={2} />
      </div>
      <h3>Placar: Jogador 1 - {placar.jogador1} | Jogador 2 - {placar.jogador2}</h3>
      {vencedor && (
        <div>
          <h2>{vencedor}</h2>
          <button onClick={resetarJogo}>Jogar Novamente</button>
        </div>
      )}
    </div>
  );
};

export default Jogo;
