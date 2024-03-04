import { ChangeEventHandler, MouseEventHandler } from "react";
import "./TaskItem.scss";

type TaskItemProps = {
  taskname: string;
  index: any;
  handleDelete: MouseEventHandler<HTMLButtonElement>;
  handleChange: ChangeEventHandler<HTMLInputElement>;
};

const TaskItem = ({
  taskname,
  index,
  handleDelete,
  handleChange,
}: TaskItemProps) => {
  return (
    <div className="todo-item">
      <p key={index}>
        <input type="checkbox" onChange={() => handleChange(index)}></input>
        {taskname}
        <button className="todo__button" onClick={() => handleDelete(index)}>
          🗑️
        </button>
      </p>
    </div>
  );
};

export default TaskItem;