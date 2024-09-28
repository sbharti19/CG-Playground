'use client';
import React, { useState } from 'react';
import { quiz } from './data';
import Link from 'next/link.js';

export default function Quiz() {
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<boolean | null>(null);
  const [checked, setChecked] = useState<boolean>(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [startQuiz, setShowQuiz] = useState(false);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, answers, correctAnswer } = questions[activeQuestion];

  // Select and check answer
  const onAnswerSelected = (answer: string, idx: number) => {
    setChecked(true);
    setSelectedAnswerIndex(idx);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  // Calculate score and increment to next question
  const nextQuestion = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : {
            ...prev,
            wrongAnswers: prev.wrongAnswers + 1,
          }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
    setChecked(false);
  };

  return (
    <div className=' bg-dark-layer-1 w-screen h-screen'>
      {!startQuiz ? (
         <div className="max-w-xl w-full p-4 mx-auto flex rounded-md justify-center items-center min-h-screen ">
         <div>
             <div className="bg-gray-100 justify-center p-4 mt-8 w-96 h-72 rounded-md">
              
               <button
                 onClick={() => {setShowQuiz(true)}}
                 className="w-80 mt-24 ml-4 bg-amber-500 mr-4 justify-center py-4 text-white rounded-3xl font-semibold cursor-pointer"
               >
                 Start the Quiz
               </button>
               <div className ="text-end">
               <Link href="/" className="text-dark-layer-1 text-l font-bold hover:text-cyan-700 underline">
             Go back to home
           </Link>
           </div>
   </div>
           </div>
       </div>
      ):( <div className="max-w-xl w-full mx-auto p-4 ">
        <div>
          <h2 className="text-gray-300">
            Question: {activeQuestion + 1}
            <span>/{questions.length}</span>
          </h2>
        </div>
        <div>
          {!showResult ? (
            <div className="bg-gray-100 p-4 mt-8 rounded">
              <h3 className="pb-8 text-black text-xl">{questions[activeQuestion].question}</h3>
              <ul>
                {answers.map((answer, idx) => (
                  <li
                    key={idx}
                    onClick={() => onAnswerSelected(answer, idx)}
                    className={`list-none cursor-pointer my-2 p-4 text-black border border-gray-300 ${
                      selectedAnswerIndex === idx
                        ? 'bg-dark-yellow text-white'
                        : 'hover:bg-gray-300'
                    }`}
                  >
                    <span>{answer}</span>
                  </li>
                ))}
              </ul>
              {checked ? (
                <button
                  onClick={nextQuestion}
                  className="w-full py-4 mt-3 text-white bg-dark-layer-2 rounded cursor-pointer"
                >
                  {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              ) : (
                <button
                  disabled
                  className="w-full py-4 mt-3 text-white bg-slate-500 rounded"
                >
                  {activeQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
              )}
            </div>
          ) : (
            <div className="bg-gray-100 p-4 mt-8 rounded">
              <h3 className="pb-8 text-black text-xl">Results</h3>
              <h3 className="pb-8 text-black text-xl">Overall {(result.score / 25) * 100}%</h3>
              <p className="py-2">
                Total Questions: <span>{questions.length}</span>
              </p>
              <p className="py-2">
                Total Score: <span>{result.score}</span>
              </p>
              <p className="py-2">
                Correct Answers: <span>{result.correctAnswers}</span>
              </p>
              <p className="py-2">
                Wrong Answers: <span>{result.wrongAnswers}</span>
              </p>
              <button
                onClick={() => window.location.reload()}
                className="w-full py-4 mt-3 text-white bg-dark-layer-1 rounded cursor-pointer"
              >
                Restart
              </button>
              <div className ="text-end">
              <Link href="/" className="text-white bg-dark-layer-1 text-l font-bold hover:text-cyan-700  underline">
            Go back to home
          </Link>
          </div>
            </div>
          )}
        </div>
      </div>)

   
}
    </div>
  );
}



