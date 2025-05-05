// src/components/QuestionCard.jsx
import React, { useContext, useMemo } from 'react';
import { QuizContext } from './QuizContext'
import Timer from './Timer';

export default function QuestionCard() {
    const {
        questions,
        currentIdx,
        selectAnswer,
        skipQuestion
    } = useContext(QuizContext);

    const q = questions[currentIdx];

    // shuffle answers once per question
    const options = useMemo(() => {
        const all = [...q.incorrect_answers, q.correct_answer];
        return all.sort(() => Math.random() - 0.5);
    }, [q]);

    return (
        <div className="p-4 border rounded shadow-md">
            <h2
                className="text-lg"
                dangerouslySetInnerHTML={{ __html: q.question }}
            />
            <Timer onExpire={skipQuestion} />
            <div className="grid grid-cols-2 gap-2 mt-4">
                {options.map((ans, i) => (
                    <button
                        key={i}
                        className="p-2 border rounded hover:bg-gray-100"
                        onClick={() =>
                            selectAnswer(ans === q.correct_answer)
                        }
                        dangerouslySetInnerHTML={{ __html: ans }}
                    />
                ))}
            </div>
            <button
                className="mt-4 text-sm text-gray-500 underline"
                onClick={skipQuestion}
            >
                Skip Question
            </button>
        </div>
    );
}
