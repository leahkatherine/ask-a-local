import { useState, useEffect } from "react";


export const useQuiz = (quizUrl) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userResponses, setUserResponses] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [currentQuestionSet, setCurrentQuestionSet] = useState([]);

  useEffect(() => {
    // RACE CONDITION 1
    if (!quizUrl) {
      // MOCK DATA

      const mockData = [
        {
          question: "What is this visit to you?",
          type: "multiple",
          choices: [
            {
              answer: "A long awaited vacation",
            },
            {
              answer: "Quick getaway",
            },
            {
              answer: "Romantic get away",
            },
            {
              answer: "Honeymoon",
            },
            {
                answer: "Bachelor/Bachelorette",
            },
            {
                answer: "Singles trip",
            },
          ],
        },

        {
          question: "What is your age",
          type: "text",
        },

          {
            question: "Mobility, or physical health issues",
            type: "multiple", 
            choices: [
              {
                answer: "If yes, I hope you can feel comfortable enough sharing your limits, if any, with me in an email to askalocal@gmail.com",
              },
              {
                answer: "No, but please don’t make me walk in the sun I will burn",
              },
              {
                answer: "No, lets go! ",
              },
            ],
          },

          {
            question: "Have you been to Savannah before?",
            type: "multiple",
            choices: [
                {
                  answer: "yes",
                },
                {
                  answer: "no",
                },
            ],
          },

          {
            question: "How often do you travel?",
            type: "multiple",
            choices: [
                {
                  answer:"Every year",
                },
                {
                  answer:"I travel quite frequently for leisure or work",
                },
                {
                  answer:"It’s been some time since I've got away",
                },
                {
                  answer:"It’s been 10+ years",
                }
            ],
          },

          {
            question:"Whats an average Saturday night for you? Pick what sounds the most like you.",
            type: "multiple",
            choices: [
                {
                  answer:"I like sober fun",
                },
                {
                  answer:"I like to binge my shows",
                },
                {
                  answer:"playing video games ",
                },
                {
                  answer:"playing video games ",
                },
                {
                  answer:"Picked up a new book",
                },
                {
                  answer:"I love meeting friends",
                },
                {
                  answer:"I have been waiting for this happy hour all week there’s nothing you can do to stop me!"
                },
                {
                  answer:"asleep",
                },
            ],
          },


      ];

      setTimeout(() => {
        setIsLoading(false);
        setCurrentQuestionSet(mockData);
      }, 1000);
      return;
    }

    //     // RACE CONDITION 2
    //     axios
    //       .get(quizUrl)
    //       .then((response) => {
    //         setIsLoading(false);
    //         setCurrentQuestionSet(response.data.results);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
  }, []);

  const handleAnswerChange = (questionIndex, answer) => {
    setUserResponses((prevAnswers) => ({
      ...prevAnswers,
      [questionIndex]: answer,
    }));
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const getCurrentQuestion = () => {
    return currentQuestionSet[currentQuestionIndex];
  };

  const getTotalQuestions = () => {
    return currentQuestionSet.length;
  };

  const getSubmittedAnswers = () => {
    return userResponses;
  };

  const handleSubmit = () => {
    const answers = getSubmittedAnswers();
    

    // return more verbose array of objects that contains the answer, index, and question

    const formattedAnswers = Object.keys(answers).map((questionIndex) => {
      const question = currentQuestionSet[questionIndex].question;
      const answer = answers[questionIndex];
      return {
        question,
        answer,
        questionIndex,
      };
    });

    // TODO: Send data to backend
    console.log(formattedAnswers);
  };

  return {
    currentQuestionIndex,
    userResponses,
    isLoading,
    currentQuestionSet,
    setCurrentQuestionSet,
    handleAnswerChange,
    handleNextQuestion,
    handlePreviousQuestion,
    getCurrentQuestion,
    getTotalQuestions,
    getSubmittedAnswers,
    handleSubmit,
  };

};