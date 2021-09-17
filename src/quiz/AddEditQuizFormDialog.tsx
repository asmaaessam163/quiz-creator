import { useState } from "react"
import AppDialog from "../dialog/AppDialog"
import { Quiz } from "../types"
import AddEditQuestionForm from "./AddEditQuestionForm"

interface AddEditQuizFormDialogProps {
    open: boolean;
    onClose: () => void
    quiz?: Quiz
}


const AddEditQuizFormDialog = ({open, onClose, quiz}:AddEditQuizFormDialogProps) => {

    const [formValues, setFormValues] = useState<Quiz>(quiz ||{
        created: "",
        description: "",
        id: 0,
        modified: "",
        questions_answers: [],
        score: null,
        title: "",
        url: ""
      })

    const [addNewQuestion, setAddNewQuestion] = useState<boolean>(false)

      const handleChange =(e: any) => {
          setFormValues((prev) => ({...prev, [e.target.name]: e.target.value}))
      };

    return <AppDialog open={open} onClose={onClose} title={quiz? `Edit ${quiz.title}`: "Add new quiz"} >

        <form method="post" onSubmit={()=> console.log("Hi")}>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            <input type='text' className='input' name='title' value={formValues.title} onChange={handleChange} placeholder='Title'/>
            <input type='text' className='input' name='description' value={formValues.description} onChange={handleChange} placeholder='Description'/>
            {formValues?.questions_answers.map(qa => 
                <div key={qa.id} className='question'>
                <div className="question-text">{qa.text}</div>
                {qa.answers.map(answer => <div className='answer' key={answer.id}>
                <input type='radio'/>
                <div>{answer.text}</div>
                </div>)}
                </div>
            )}
            {addNewQuestion && <AddEditQuestionForm setQuizFormValues={setFormValues} />}
            <div onClick={()=> setAddNewQuestion(true)}>
                Add a question 
                <span> +
                    </span>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
            <button type='submit'> {quiz? "Save changes": "Submit"}</button>
            </div>
            </form>
    </AppDialog>
}

export default AddEditQuizFormDialog