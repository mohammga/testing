"use client";

import { useState } from "react";

function Quiz({ questions, onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState([]);
  const isAnswerSelected = typeof selected[currentIndex] !== "undefined";

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onFinish(selected);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleChoice = (index) => {
    const newSelected = [...selected];
    newSelected[currentIndex] = index;
    setSelected(newSelected);
  };


  return (
    <div>
      <h2>{questions[currentIndex].title}</h2>
      <form>
        {questions[currentIndex].answers.map((answer, index) => (
          <div key={index}>
            <input
              type="radio"
              name="quiz-answer"
              value={index}
              checked={selected[currentIndex] === index}
              onChange={() => handleChoice(index)}
              required
            />
            <label>{answer.answer}</label>
          </div>
        ))}
      </form>
      <p>Hint: {questions[currentIndex].helper.text}</p>
      {currentIndex > 0 && <button onClick={handlePrev}>Tilbake</button>}
      {isAnswerSelected && (
        <button onClick={handleNext}>
          {currentIndex === questions.length - 1 ? "Send" : "Neste"}
        </button>
      )}
    </div>
  );
}

export default Quiz;
