import { useState, FormEvent } from "react";
import "./ToDoList.scss"
import TaskItem from "../../TaskItem/TaskItem";



const ToDoList = () => {

const [todos, setTodos] = useState<string[]>([]);
const [inputTodo, setInputTodo] = useState<string>("");
const [checked, setChecked] = useState<boolean>(false);

const reset = () => {
setTodos([]);
}

const handleInput = (event: FormEvent<HTMLInputElement>) => {
  setInputTodo(event.currentTarget.value);
};

const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
  event.preventDefault();
  setTodos([...todos, inputTodo]);
  setInputTodo("");
};

const handleDelete = (index: any) => {
  let newTodos = [...todos];
  newTodos.splice(index, 1);
  setTodos(newTodos);
};

const handleChange = () => {
  setChecked(!checked);
};


return (
  <section className="todo-container">
    <div className="todo">
      
      <p>✏️ Today's Tasks</p>

      <button className="todo__button--reset" onClick={reset}>
        Reset
      </button>
   
      <div className="todo__input">
        <form id="todo__form">
          <input
            id="todo__input"
            type="text"
            placeholder="🔎 Add task.."
            value={inputTodo}
            onChange={handleInput}
          />
          <button className="todo__button" onClick={handleSubmit}>
            ➕
          </button>
        </form>
      </div>
      <div className="todo__output">
        <ul>
          
          {todos.map((task, index) => (
            <TaskItem
              key={index}
              taskname={task}
              index={index}
              handleDelete={handleDelete}
              handleChange={handleChange}
            />
          ))}
        </ul>
      </div>
    </div>
  </section>
);
}

export default ToDoList;