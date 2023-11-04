import React, { useRef, useState } from "react";
import styled from "styled-components";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);

  const ref = useRef();

  const addTodoToTheArray = () => {
    setTodo([
      ...todo,
      {
        i: input,
        id: Math.random().toString(36).slice(2, 8),
      },
    ]);
    setInput("");
  };

  const change = (e) => {
    setInput(e.target.value);
  };

  const deleteTodo = (id) => {
    const t = todo.find((i) => i.id === id);
    todo.splice(todo.indexOf(t), 1);
    setTodo([...todo]);
  };

  const completeTodo = (id) => {
    const t = todo.find((i) => i.id === id);

    if (t) {
      ref.current.style.textDecoration = "line-through";
    } else {
      ref.current.style.textDecoration = "none";
    }
  };

  return (
    <Container>
      <Inputs>
        <Input
          type="text"
          placeholder="add TODO"
          onChange={change}
          value={input}
        />
        <Button onClick={addTodoToTheArray}>ADD</Button>
      </Inputs>
      <Todos>
        {todo.map((t) => {
          return (
            <T>
              <h1 ref={ref}>{t.i}</h1>
              <div className="btns">
                {active === false && (
                  <button onClick={() => completeTodo(t.id)}>Complete</button>
                )}
                <button onClick={() => deleteTodo(t.id)}>Delete</button>
              </div>
            </T>
          );
        })}
      </Todos>
    </Container>
  );
};

export default Todo;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  translate: -50% -50%;
  width: 40%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
  height: 60vh;
  display: flex;
  flex-direction: column;
`;
const Inputs = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px;
  border-bottom: 1px solid #ccc;
  height: 30px;
`;
const Input = styled.input`
  width: 80%;
  border: none;
  outline: none;
`;
const Button = styled.button`
  padding: 5px;
  width: 15%;
  border: none;
  border-radius: 4px;
  background: #fc4a1a;
  background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);
  background: linear-gradient(to right, #f7b733, #fc4a1a);
  color: #fff;
  cursor: pointer;
  &:hover {
    background: linear-gradient(to left, #f7b633bd, #fc4a1abd);
  }
  &:active {
    background: linear-gradient(to right, #f7b733, #fc4a1a);
  }
`;
const Todos = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 15px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-track {
    background-color: #fff;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fc4a1a;
    border-radius: 20px;
    border: 3px solid #fc4a1a;
  }

  overflow-x: hidden;
  gap: 15px;
`;
const T = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 35px;
  h1 {
    font-size: 18px;
    margin-left: 15px;
  }

  .btns {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 15px;
    button {
      padding: 3px;
      border: none;
      border: none;
      border-radius: 4px;
      background: #fc4a1a;
      background: -webkit-linear-gradient(to right, #f7b733, #fc4a1a);
      background: linear-gradient(to right, #f7b733, #fc4a1a);
      color: #fff;
      cursor: pointer;
      &:hover {
        background: linear-gradient(to left, #f7b633bd, #fc4a1abd);
      }
      &:active {
        background: linear-gradient(to right, #f7b733, #fc4a1a);
      }
    }
  }
`;
