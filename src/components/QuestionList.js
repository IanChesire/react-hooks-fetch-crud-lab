import React from "react";

function QuestionList({ questions, updateQuestion }) {
  const handleCorrectIndexChange = (id, correctIndex) => {
    updateQuestion(id, { correctIndex });
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {questions.map((question) => (
          <li key={question.id}>
            <h4>Question {question.id}</h4>
            <h5>Prompt: {question.prompt}</h5>
            <label>
              Correct Answer:
              <select
                value={question.correctIndex}
                onChange={(e) =>
                  handleCorrectIndexChange(
                    question.id,
                    parseInt(e.target.value)
                  )
                }
              >
                {question.answers.map((answer, index) => (
                  <option key={index} value={index}>
                    {answer}
                  </option>
                ))}
              </select>
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
