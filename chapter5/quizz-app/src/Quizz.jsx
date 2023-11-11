import React, { useEffect, useState } from "react";
import { questions } from "./questions";

const Quizz = () => {
  const [correctArr, setCorrectArr] = useState([]);
  const [correct, setCorrect] = useState();
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(5);

  const [leftOver, setLeftOver] = useState(0);

  const onchange = (e) => {
    setCorrect(e.target.value);
    correctArr.push(e.target.value);
  };

  useEffect(() => {
    if (timer <= 0) {
      return;
    }
    // interval
    const interval = setInterval(() => {
      // timer
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer > 0]);

  console.log(timer);

  const getCorrecAnswer = () => {
    questions.map((q) => {
      correctArr.map((c) => {
        if (c !== q.answer) {
          correctArr.splice(correctArr.indexOf(c), 1);
        } else {
          setScore(correctArr.length * 10);
        }
      });
    });

    setLeftOver(timer);

    console.log(leftOver);

    console.log(correctArr);
  };

  return (
    <div>
      <h1>Quiz</h1>
      <h1>{score}</h1>
      <h1>{timer}s</h1>
      <div
        className="questions"
        style={{ display: "flex", gap: "20px", justifyContent: "center" }}
      >
        {questions.map((q) => {
          return (
            <div
              className="q"
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <h1>{q.question}</h1>
              <div className="choices">
                {q.choices.map((c) => {
                  return (
                    <div
                      className="inputs"
                      style={{
                        display: "flex",
                        gap: "20px",
                        justifyContent: "center",
                      }}
                    >
                      <h1>{c}</h1>
                      <input type="radio" value={c} onChange={onchange} />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={getCorrecAnswer}>Submit</button>;
    </div>
  );
};

export default Quizz;
