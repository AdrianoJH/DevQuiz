import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import './GameOver.css';

const GameOver = () => {
  return (
    <div id="fimdejogo">
        <h2>SEU RESULTADO!</h2>
        <p id="pontos">Pontuação: x</p>
        <p id="result">Você acertou y de z perguntas.</p>
        <button id="reiniciar">REINICIAR</button>
        </div>
  );
};

export default GameOver;