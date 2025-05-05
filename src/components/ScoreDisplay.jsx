// src/components/ScoreDisplay.jsx
import React, { useContext } from 'react';
import { QuizContext } from './QuizContext';

export default function ScoreDisplay() {
    const { score, questions, resetQuiz } = useContext(QuizContext);

    return (
        <div className="p-4 text-center">
            <h2 className="text-xl">Your Score</h2>
            <p className="text-2xl my-2">
                {score} / {questions.length}
            </p>
            <button
                className="px-4 py-2 border rounded"
                onClick={resetQuiz}
            >
                Restart Quiz
            </button>
        </div>
    );
}
