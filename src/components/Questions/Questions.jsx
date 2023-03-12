import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import './Questions.css';
import Logo from '../../img/devstars.png'
import Options from '../Options/Options';

const Questions = () => {
  const [quizState, dispatch] = useContext(QuizContext);
  const currentQuestions = quizState.questions[quizState.currentQuestions];

  const onSelectOption = (option) => {
    dispatch({
      type: "CHECK_ANSWER",
      payload: { answer: currentQuestions.answer, option},
    });

  };
  
  return (
    <div className="Questions">
      <p id='perg'>Pergunta {quizState.currentQuestions + 1} de {quizState.questions.length}</p>
      <h2 id='question'>{currentQuestions.question}</h2>
      <div id='options-container'>
          {currentQuestions.options.map((option) => (
            <Options option = {option} key = {option} answer = {currentQuestions.answer}
            selectOption = {() => onSelectOption(option)} />
          ))}
      </div>
      {quizState.answerSelected && (
        <button onClick={() => dispatch({ type: "CHANGE_QUESTION"})} id='next'><p id='prox'>Próxima</p></button>
      )}
  
      <img id='logoP' src= {Logo} />
    
    </div>
  );
};

export default Questions;

