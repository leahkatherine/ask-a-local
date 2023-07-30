import { useMemo } from "react";
import { useQuiz } from "../hooks/useQuiz";


export const Quiz = () => {
  const {
    currentQuestionIndex,
    isLoading,
    handleAnswerChange,
    handleNextQuestion,
    handlePreviousQuestion,
    getCurrentQuestion,
    getTotalQuestions,
    getSubmittedAnswers,
    handleSubmit,
    
  } = useQuiz();

  const currentQuestion = getCurrentQuestion();
  const totalQuestions = getTotalQuestions();
  const userResponses = getSubmittedAnswers();

  // bools
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const isAnswerCorrect = useMemo(() => {
    if (!currentQuestion?.correctAnswer) {
      return false;
    }
    return (
      currentQuestion?.correctAnswer?.toLowerCase() ===
      userResponses[currentQuestionIndex]?.toLowerCase()
    );
  }, [currentQuestion, currentQuestionIndex, userResponses]);

  const randomizedChoices = useMemo(() => {
    return currentQuestion?.choices?.sort(() => Math.random() - 0.5) || [];
  }, [currentQuestion]);

  if (isLoading) {
    return <p>Loading...Hold tight friend!</p>;
  }

  return (
    <div>
      <h2>Question {currentQuestionIndex + 1}</h2>
      <p>{currentQuestion.question}</p>

      {isAnswerCorrect && (
        <span
          style={{
            color: "green",
          }}
        >
          (correct)
        </span>
      )}

      {currentQuestion.type === "text" && (
        <input
          type="text"
          value={userResponses[currentQuestionIndex] || ""}
          onChange={(e) =>
            handleAnswerChange(currentQuestionIndex, e.target.value)
          }
        />
      )}

      {currentQuestion.type === "multiple" && (
        <>
          {randomizedChoices.map((choice, index) => (
            <div key={index}>
              <input
                type="radio"
                id={choice.answer}
                name={currentQuestion.question}
                value={choice.answer}
                checked={userResponses[currentQuestionIndex] === choice.answer}
                onChange={(e) =>
                  handleAnswerChange(currentQuestionIndex, e.target.value)
                }
              />
              <label htmlFor={choice.answer}>{choice.answer}</label>
            </div>
          ))}
        </>
      )}

      <br />
      {!isFirstQuestion && (
        <button onClick={handlePreviousQuestion}>Previous</button>
      )}
      {!isLastQuestion && <button onClick={handleNextQuestion}>Next</button>}
      {isLastQuestion && <button onClick={handleSubmit}>Submit</button>}
    </div>
    
  );
  
};
