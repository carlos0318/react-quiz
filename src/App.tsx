import React, { useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionsState } from './api/API';
import QuestionCard from './components/QuestionCard';

import { AppContainer, AppTitle, Button, AppScore } from './styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );

    setLoading(false);
    setScore(0);
    setNumber(0);
    setUserAnswers([]);
    setQuestions(newQuestions);
  }

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;

      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <AppContainer>
      <AppTitle>React Quiz</AppTitle>
      {!loading && gameOver && <Button onClick={startTrivia}>Start</Button>}
      {loading && <div className="lds-ring"><div></div><div></div><div></div><div></div></div>}
      {!loading && !gameOver && (
        <>
          <AppScore>Score: {score}</AppScore>
          <QuestionCard
            questionNr={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
          <Button onClick={nextQuestion}>Next question</Button>
        </>
      )}
    </AppContainer>
  )
}

export default App
