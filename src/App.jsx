import { useContext, useEffect } from 'react';
import { QuizContext } from './context/quiz';
import Welcome from './components/Welcome/Welcome';
import Questions from './components/Questions/Questions';
import GameOver from './components/GameOver/GameOver';
import './App.css';



function App() {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect (() => {
    dispatch({ type: "SHUFFLE_QUESTIONS"});
  }, [])

  return (
    <div className="App">
      {quizState.gameStage === "Start" && <Welcome />}
      {quizState.gameStage === "Playing" && <Questions />}
      {quizState.gameStage === "End" && <GameOver />}
    </div>
    
    
  )
}


export default App;
