import './App.css';
import QuizCard from './quiz/QuizCard';
import {quizes} from './data'
import AddEditQuizFormDialog from './quiz/AddEditQuizFormDialog';
import { useState } from 'react';

function App() {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <div>
      <div className='content'>
      <div className='add-quiz-button' onClick={() => setOpen(true)}>
        + New quiz
      </div>
      {quizes.map((quiz) => <QuizCard key={quiz.id} quiz={quiz}/>)}
      </div>
      <AddEditQuizFormDialog open={open} onClose={()=>setOpen(false)} />
    </div>
  );
}

export default App;
