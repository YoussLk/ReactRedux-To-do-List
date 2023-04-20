import React, { useState } from "react";
// import { connect } from "react-redux";
import { addTask } from "../JS/Actions/actions";
import { useDispatch } from "react-redux";
import { GrAdd } from "react-icons/gr";


const AddTask = () => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask(description));
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center  space-x-6 p-4"
    >
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add new task ..."
        className="add_task border-2 border-black-700 w-60 p-3"
      />
      <button
        type="submit"
        className="btn border-2 border-black-700 flex items-center justify-center p-3"
      >
        <GrAdd />
      </button>
    </form>
  );
};

export default AddTask;
