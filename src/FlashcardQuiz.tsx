import React, { useState } from "react";

type Flashcard = {
  question: string;
  answer: string;
};

const flashcards: Flashcard[] = [
  { question: "What is the capital of France?", answer: "Paris" },
  {
    question: "What does HTTP stand for?",
    answer: "HyperText Transfer Protocol",
  },
  { question: "Who invented JavaScript?", answer: "Brendan Eich" },
  { question: "What year was React released?", answer: "2013" },
  {
    question: "What is TypeScript?",
    answer: "A superset of JavaScript that adds static typing.",
  },
];

const FlashcardQuiz: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const nextCard = () => {
    setShowAnswer(false);
    setCurrent((prev) => (prev + 1) % flashcards.length);
  };

  const prevCard = () => {
    setShowAnswer(false);
    setCurrent((prev) => (prev - 1 + flashcards.length) % flashcards.length);
  };

  return (
    <div className="container">
      <div className="card" onClick={() => setShowAnswer(!showAnswer)}>
        <p>
          {showAnswer
            ? flashcards[current].answer
            : flashcards[current].question}
        </p>
        <small>
          {showAnswer ? "Click to see question" : "Click to see answer"}
        </small>
      </div>
      <div className="controls">
        <button onClick={prevCard}>Previous</button>
        <button onClick={nextCard}>Next</button>
      </div>
    </div>
  );
};

export default FlashcardQuiz;
