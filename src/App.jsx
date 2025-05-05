// src/App.jsx
import React from 'react';
import useFetchQuestions from '@/hooks/useFetchQuestions';
import { QuizProvider } from './components/QuizContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import Loader from '@/components/Loader';
import ErrorMsg from '@/components/ErrorMsg';
import QuestionCard from '@/components/QuestionCard';
import ScoreDisplay from '@/components/ScoreDisplay';

export default function App() {
  const { questions, loading, error } = useFetchQuestions(10);

  if (loading) return <Loader />;
  if (error) return <ErrorMsg message={error} onRetry={() => window.location.reload()} />;

  return (
    <ErrorBoundary>
      <QuizProvider questions={questions}>
        {questions.length === 0 ? null : (
          questions.length > 0 && (
            <div className="max-w-md mx-auto mt-8">
              {/** Show either QuestionCard or ScoreDisplay */}
              {/** currentIdx is managed inside QuizContext */}
              <QuestionCard />
              {/* In your reducer, once currentIdx === questions.length, you could conditionally render ScoreDisplay instead */}
              {/* e.g. in QuizContext you could expose currentIdx and render here: */}
              {/* state.currentIdx < questions.length ? <QuestionCard /> : <ScoreDisplay /> */}
            </div>
          )
        )}
      </QuizProvider>
    </ErrorBoundary>
  );
}
