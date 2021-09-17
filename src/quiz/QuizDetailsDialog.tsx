import AppDialog from "../dialog/AppDialog"
import { Quiz } from "../types"

interface QuizDetailsDialogProps {
    open: boolean;
    onClose: () => void
    quiz: Quiz
}
const QuizDetailsDialog = ({open, onClose, quiz}:QuizDetailsDialogProps) => {
    return <AppDialog open={open} onClose={onClose} title={quiz.title} >
        {quiz.questions_answers.map(qa => 
            <div key={qa.id} className='question'>
            <div className="question-text">{qa.text}</div>
            {qa.answers.map(answer => <div className='answer' key={answer.id}>
            <input type='radio'/>
            <div>{answer.text}</div>
            </div>)}
            </div>
            )}
    </AppDialog>
}

export default QuizDetailsDialog