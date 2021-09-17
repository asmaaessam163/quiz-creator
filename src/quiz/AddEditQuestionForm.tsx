import { useState } from "react"
import { QuestionsAndAnswers, Quiz, Answer } from "../types"

interface AddEditQuestionFormProps{
    question?: QuestionsAndAnswers;
    setQuizFormValues: React.Dispatch<React.SetStateAction<Quiz>>
}

const AddEditQuestionForm = ({question, setQuizFormValues}: AddEditQuestionFormProps) => {

    const [formValues, setFormValues] = useState<QuestionsAndAnswers>(question || {
        answer_id: null,
        answers: [],
        feedback_false: "",
        feedback_true: "",
        id: 0,
        text: ""
      })

      const handleChange =(e: any) => {
        setFormValues((prev) => ({...prev, [e.target.name]: e.target.value}))
    };

    const handleSubmit =() => setQuizFormValues((prev)=> ({...prev, questions_answers: prev.questions_answers.concat([formValues])}));

    return <form>
        <div className= "question-form">
        <input type='text' className='input' name='text' value={formValues.text} onChange={handleChange} placeholder='Question'/>
        <input type='text' className='input' name='feedback_false' value={formValues.feedback_false} onChange={handleChange} placeholder='Feedback if answer is false' />
        <input type='text' className='input' name='feedback_true' value={formValues.feedback_true} onChange={handleChange} placeholder='Feedback if answer is true' />
        <div className='answers'>
        <div style={{marginBottom: '1rem'}}> Answers</div>
        {formValues?.answers.map((answer,index) => <AnswerComponent key={index} questionAnswer={answer} setQuestionAnswer={setFormValues} index={index + 1}/>)}
        <div onClick={()=> setFormValues((prev) => ({...prev, answers: prev.answers.concat([{id: 0, is_true: false, text: ""}])}))}>
                Add answer 
                <span> +
                    </span>
                </div>
        </div>
        <button onClick={handleSubmit}>{question? "Save": "Add"}</button>
        </div>
    </form>
}

export default AddEditQuestionForm

interface AnswerProps {
    questionAnswer: Answer, setQuestionAnswer : React.Dispatch<React.SetStateAction<QuestionsAndAnswers>>,
    index: number
}

const AnswerComponent = ({questionAnswer,setQuestionAnswer, index }: AnswerProps) => {
    console.log({questionAnswer})
    const [answer, setAnswer] = useState<Answer>(questionAnswer)
    const handleChange = (e: any) => {
        setAnswer((prev) => ({...prev, [e.target.name]: e.target.value}))
        setQuestionAnswer((prev) => ({...prev, answers: prev.answers.concat([answer])}))
    }
    return <input type='text' className='input' value={answer.text} name="text" onChange={handleChange} placeholder={`Option ${index}`}/>
}