import { Quiz } from "../types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import QuizDetailsDialog from "./QuizDetailsDialog"

interface QuizCardProps {
    quiz: Quiz
}

const QuizCard = ({quiz}: QuizCardProps) => {
    const {title, description} = quiz
    const [open, setOpen] = useState<boolean>(false)

    const onClose= () => setOpen(false)

    return<> <div className="quiz-card">
        <div className='quiz-content'>
        <div className='quiz-header'>{title}</div>
        <div className='quiz-description'>{description}</div>
        </div>
        <div className='quiz-actions'>
        <FontAwesomeIcon icon={faEye} className='icon' onClick={()=> setOpen(true)}/>
        <FontAwesomeIcon icon={faEdit} className='icon'/>
        </div>
    </div>
      <QuizDetailsDialog open={open} onClose={onClose} quiz={quiz}/>
      </>

}

export default QuizCard