interface QuestionsAndAnswers{
    answer_id: number | null,
    answers: {id: number, is_true: boolean; text: string}[]
    feedback_false: string;
    feedback_true: string;
    id: number;
    text: string
}

export interface Quiz {
    created: string,
    description: string;
    id: number;
    modified: string;
    questions_answers: QuestionsAndAnswers[];
    score: number | null;
    title: string;
    url: string
}