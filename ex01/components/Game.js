import { useState, useEffect } from 'react';

export default function Game() {
  const [secret, setSecret] = useState('');
  const [guess, setGuess] = useState('');
  const [tries, setTries] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    startGame();
  }, []);

  function generateSecret() {
    const digits = [];
    while (digits.length < 4) {
      const digit = Math.floor(Math.random() * 10).toString();
      if (!digits.includes(digit)) digits.push(digit);
    }
    return digits.join('');
  }

  function startGame() {
    const newSecret = generateSecret();
    setSecret(newSecret);
    setTries([]);
    setGuess('');
    setGameOver(false);
    setMessage('');
  }

  function checkGuess() {
    if (guess.length !== 4) return alert('Digite 4 dígitos!');
    if (gameOver) return;

    let bulls = 0;
    let cows = 0;
    for (let i = 0; i < 4; i++) {
      if (guess[i] === secret[i]) bulls++;
      else if (secret.includes(guess[i])) cows++;
    }

    const newTry = { guess, bulls, cows };
    const updatedTries = [newTry, ...tries];

    setTries(updatedTries);
    setGuess('');

    if (bulls === 4) {
      setGameOver(true);
      setMessage('🎉 Você acertou a senha!');
    } else if (updatedTries.length === 10) {
      setGameOver(true);
      setMessage(`😢 Fim de jogo. A senha era ${secret}`);
    }
  }

  return (
    <div>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={guess}
          maxLength={4}
          onChange={(e) => setGuess(e.target.value)}
          className="bg-gray-800 border p-2"
        />
        <button onClick={checkGuess} className="bg-green-600 px-4 py-2">Tentar</button>
        <button onClick={() => alert(`Senha: ${secret}`)} className="bg-yellow-600 px-4 py-2">Ver Senha</button>
        {gameOver && <button onClick={startGame} className="bg-blue-600 px-4 py-2">Novo Jogo</button>}
      </div>

      <p>{message}</p>

      <ul className="mt-4 space-y-2">
        {tries.map((t, i) => (
          <li key={i} className="border p-2">
            Tentativa: {t.guess} | 🐂 Bulls: {t.bulls} | 🐄 Cows: {t.cows}
          </li>
        ))}
      </ul>
    </div>
  );
}