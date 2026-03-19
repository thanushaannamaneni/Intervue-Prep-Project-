import { useEffect, useState } from "react";

function App() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/questions")
      .then(res => res.json())
      .then(data => setQuestions(data))
      .catch(() => setQuestions([]));
  }, []);

  return (
    <div className="container">
      <h1>Intervue Prep App</h1>
      <h3>Practice Interview Questions</h3>
      <ul>
        {questions.map(q => (
          <li key={q.id}>{q.question}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
