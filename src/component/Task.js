import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask, toggleTask, deleteTask } from "../JS/Actions/actions";
import { AiOutlineEdit } from "react-icons/ai";
import { RiDeleteBack2Line } from "react-icons/ri";

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = (e) => {
    e.preventDefault();
    if (description.trim() === "") return;
    dispatch(editTask(task.id, description));
    setIsEditing(false);
  };

  return (
    <div>
      {!isEditing ? (
        <>
          <div className="flex items-center  space-x-6 p-2 text-[1.3rem] list-none">
            <input
              type="checkbox"
              checked={task.isDone}
              onChange={handleToggle}
              className=""
            />
            <span className={task.isDone ? "done line-through " : ""}>
              {task.description}
            </span>
            <button onClick={() => setIsEditing(true)}>
              <AiOutlineEdit />{" "}
            </button>
            <button onClick={handleDelete}>
              <RiDeleteBack2Line />
            </button>
          </div>
        </>
      ) : (
        <form onSubmit={handleEdit} className="flex items-center space-x-5">
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border-2 border-black-700"
          />
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default Task;
