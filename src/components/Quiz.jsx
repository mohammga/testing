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
    <div className="flex items-center justify-center p-8 bg-gray-100 min-h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">{questions[currentIndex].title}</h2>
        
        <form className="space-y-4">
          {questions[currentIndex].answers.map((answer, index) => (
            <div key={index} className="flex items-center space-x-3">
              <input
                type="radio"
                name="quiz-answer"
                value={index}
                checked={selected[currentIndex] === index}
                onChange={() => handleChoice(index)}
                required
                className="text-blue-500 h-4 w-4"
              />
              <label className="text-gray-700">{answer.answer}</label>
            </div>
          ))}
        </form>
        
        <p className="text-sm italic mt-6">Hint: {questions[currentIndex].helper.text}</p>
        
        <div className="flex gap-4 mt-8">
          {currentIndex > 0 && (
            <button onClick={handlePrev} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Tilbake
            </button>
          )}
          
          {isAnswerSelected && (
            <button onClick={handleNext} className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
              {currentIndex === questions.length - 1 ? "Send" : "Neste"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
