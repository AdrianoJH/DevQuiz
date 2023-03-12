import { useContext } from 'react';
import { QuizContext } from '../../context/quiz';

import './Welcome.css';
import Logo from '../../img/devstars.png';


const Welcome = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className='Welcome'>
      <img id='logo' src= {Logo} />
      <h1>Quiz de Programação</h1>
      <button onClick={() => dispatch({type: "CHANGE_STAGE"})} id='btn'><span id='teste'>INICIAR TESTE</span></button>
    </div>
       
    
  );
};


export default Welcome;