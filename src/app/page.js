"use client";

import { useState } from "react";
import Quiz from "../components/Quiz";
import Result from "../components/Result";
import questions from "../lib/data.json";

export default function Home() {
  const [isFinished, setIsFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleFinish = (answers) => {
    setUserAnswers(answers);
    setIsFinished(true);
  };

  const handleRestart = () => {
    setIsFinished(false);
    setUserAnswers([]);
  };

  return (
    <div>
      {!isFinished ? (
        <Quiz questions={questions.questions} onFinish={handleFinish} />
      ) : (
        <Result
          questions={questions.questions}
          answers={userAnswers}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}
