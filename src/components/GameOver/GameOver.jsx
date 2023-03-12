import { useContext } from "react";
import { QuizContext } from "../../context/quiz";
import './GameOver.css';

const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div id="fimdejogo">
        <h2 id="result">SEU RESULTADO!</h2>
        <p id="pontos">Pontuação: {quizState.score}</p>
        <p id="result2">Você acertou {quizState.score} de {quizState.questions.length}{" "} perguntas.</p>
        <button onClick={() => dispatch({ type: "NEW_GAME"})} id="reiniciar"><p id="rei">REINICIAR</p></button>
        </div>
  );
};

export default GameOver;