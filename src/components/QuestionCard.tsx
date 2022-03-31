import React from 'react';
import { AnswerObject } from '../App';

import { Card, CardTitle, CardContent, CardButton } from '../styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNr: number;
    totalQuestions: number;
};

const QuestionCard: React.FC<Props> = (
    {
        question,
        answers,
        callback,
        userAnswer,
        questionNr,
        totalQuestions,
    }
) => {
    return (
        <Card>
            <CardTitle>
                Question: {questionNr} / {totalQuestions}
            </CardTitle>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <CardContent>
                {answers.map((answer) => (
                    <CardButton key={answer} disabled={userAnswer ? true : false} value={answer} onClick={callback} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </CardButton>
                ))}
            </CardContent>
        </Card>
    )
}

export default QuestionCard;