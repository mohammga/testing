function Result({ questions, answers, onRestart }) {
  const correctAnswers = questions.reduce(
    (count, question, index) => 
      question.answers[answers[index]]?.correct ? count + 1 : count,
    0
  );
  return (
    <div>
      <h2>
        Resultatet ditt: {correctAnswers} / {questions.length}
      </h2>
      <button onClick={onRestart}>Start på nytt</button>
    </div>
  );
}

export default Result;
