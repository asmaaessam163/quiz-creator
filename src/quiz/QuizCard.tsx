import { Quiz } from "../types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons'

interface QuizCardProps {
    quiz: Quiz
}

const QuizCard = ({quiz}: QuizCardProps) => {
    const {title, description} = quiz
    return <div className="quiz-card">
        <div className='quiz-content'>
        <div className='quiz-header'>{title}</div>
        <div className='quiz-description'>{description}</div>
        </div>
        <div className='quiz-actions'>
        <FontAwesomeIcon icon={faEye} className='icon'/>
        <FontAwesomeIcon icon={faEdit} className='icon'/>
        </div>
    </div>
}

export default QuizCard