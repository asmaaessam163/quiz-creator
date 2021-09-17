import { Quiz } from "../types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEdit } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react"
import QuizDetailsDialog from "./QuizDetailsDialog"
import AddEditQuizFormDialog from "./AddEditQuizFormDialog"

interface QuizCardProps {
    quiz: Quiz
}

const QuizCard = ({quiz}: QuizCardProps) => {
    const {title, description} = quiz
    const [openQuizDetails, setOpenQuizDetails] = useState<boolean>(false)
    const [openEditDialog, setOpenEditDialog] = useState<boolean>(false)

    const onCloseQuizDetails= () => setOpenQuizDetails(false)
    const onCloseEditDialog= () => setOpenEditDialog(false)
    const onOpenQuizDetails = () => () =>setOpenQuizDetails(true)
    const onOpenEditDialog = () => () =>setOpenEditDialog(true)

    return<> <div className="quiz-card">
        <div className='quiz-content'>
        <div className='quiz-header'>{title}</div>
        <div className='quiz-description'>{description}</div>
        </div>
        <div className='quiz-actions'>
        <FontAwesomeIcon icon={faEye} className='icon' onClick={onOpenQuizDetails()}/>
        <FontAwesomeIcon icon={faEdit} className='icon' onClick={onOpenEditDialog()}/>
        </div>
    </div>
      {openQuizDetails && <QuizDetailsDialog open={openQuizDetails} onClose={onCloseQuizDetails} quiz={quiz}/>}
      {openEditDialog && <AddEditQuizFormDialog open={openEditDialog} onClose={onCloseEditDialog} quiz={quiz}/>}
      </>

}

export default QuizCard