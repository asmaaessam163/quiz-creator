import './App.css';
import QuizCard from './quiz/QuizCard';
import {quizes} from './data'

function App() {
  return (
    <div>
      <div className='content'>
      <div className='add-quiz-button'>
        + New quiz
      </div>
      {quizes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz}/>)}
      </div>
    </div>
  );
}

export default App;
