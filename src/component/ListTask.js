import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Task from "./Task";
import { setFilter } from "../JS/Actions/actions";

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();

const filteredTasks = tasks.filter((task) => {
  switch (filter) {
    case "all":
      return true;
    case "done":
      return task.isDone;
    case "notDone":
      return !task.isDone;
    default:
      return true;
  }
});

  return (
    <div>
      <div className="flex space-x-7 mb-8 ">
        <button
          onClick={() => dispatch(setFilter("all"))}
          className="p-2 text-slate-100 bg-blue-300 rounded-md"
        >
          All
        </button>
        <button
          onClick={() => dispatch(setFilter("done"))}
          className="p-2 text-slate-100 bg-blue-300 rounded-md"
        >
          Done
        </button>
        <button
          onClick={() => dispatch(setFilter("notDone"))}
          className="p-2 text-slate-100 bg-blue-300 rounded-md"
        >
          Not Done
        </button>
      </div>
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
