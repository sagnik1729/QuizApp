// src/context/QuizContext.jsx
import React, { createContext, useReducer } from 'react';

const initialState = {
    questions: [],
    currentIdx: 0,
    score: 0,
};

function reducer(state, action) {
    switch (action.type) {
        case 'SET_QS':
            return { ...state, questions: action.payload };
        case 'ANSWER':
            return {
                ...state,
                currentIdx: state.currentIdx + 1,
                score: state.score + (action.correct ? 1 : 0),
            };
        case 'SKIP':
            return { ...state, currentIdx: state.currentIdx + 1 };
        case 'RESET':
            return { ...initialState, questions: state.questions };
        default:
            return state;
    }
}

export const QuizContext = createContext();

export function QuizProvider({ children, questions }) {
    const [state, dispatch] = useReducer(
        reducer,
        { ...initialState, questions }
    );

    const selectAnswer = (correct) => dispatch({ type: 'ANSWER', correct });
    const skipQuestion = () => dispatch({ type: 'SKIP' });
    const resetQuiz = () => dispatch({ type: 'RESET' });

    return (
        <QuizContext.Provider value={{
            ...state,
            selectAnswer,
            skipQuestion,
            resetQuiz
        }}>
            {children}
        </QuizContext.Provider>
    );
}
