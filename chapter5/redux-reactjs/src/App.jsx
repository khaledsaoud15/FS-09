import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/counterSlice";
import { useCallback, useMemo, useState } from "react";
import { addTodo, deletetodo, updateTodo } from "./redux/todoSlice";

const App = () => {
  const counter = useSelector((state) => state.count.counter);
  const todo = useSelector((state) => state.todos.todoArr);
  const state = useSelector((state) => state);

  console.log(state);
  const [input, setInput] = useState({
    todo: "",
    id: "",
  });
  const dispatch = useDispatch();

  const handlChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const update = (id) => {
    const index = todo.find((i) => i.id === id);
    setInput(index);
  };

  const addTodoArr = (id) => {
    const index = todo.find((i) => i.id === id);
    if (index) {
      dispatch(updateTodo(input));
    } else {
      dispatch(
        addTodo({ ...input, id: Math.random().toString(36).slice(2, 8) })
      );
    }
  };

  const removeFromTodos = (id) => {
    dispatch(deletetodo(id));
  };

  return (
    <div>
      <input
        type="text"
        value={input.todo}
        name="todo"
        placeholder="Add"
        onChange={handlChange}
      />

      <button onClick={() => addTodoArr(input.id)}>Add todo</button>
      {todo.map((t) => {
        return (
          <div className="t">
            <h1>{t.todo}</h1>
            <button onClick={() => removeFromTodos(t.id)}>Remove</button>
            <button onClick={() => update(t.id)}>Update</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
