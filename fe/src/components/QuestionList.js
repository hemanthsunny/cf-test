import React, { useState, useEffect } from 'react';

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/question`);
      const data = await response.json();
      setQuestions(data);
    }
    fetchQuestions();
  }, []);

  return (
    <div>
      <h1>Random Questions</h1>
      <ul>
        {questions.map(question => <li key={question.id}>{question.id} - {question.text}</li>)}
      </ul>
    </div>
  );
}

export default QuestionList;
