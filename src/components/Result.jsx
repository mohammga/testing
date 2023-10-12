function Result({ questions, answers, onRestart }) {
    const correctAnswers = questions.reduce(
      (count, question, index) => 
        question.answers[answers[index]]?.correct ? count + 1 : count,
      0
    );
  
    return (
      <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-8">
          Resultatet ditt: <span className="text-blue-500">{correctAnswers}</span> / {questions.length}
        </h2>
        <button 
          onClick={onRestart} 
          className="bg-green-500 hover:bg-green-600 text-white py-2 px-8 rounded transition duration-150"
        >
          Start på nytt
        </button>
      </div>
    );
  }
  
  export default Result;
  