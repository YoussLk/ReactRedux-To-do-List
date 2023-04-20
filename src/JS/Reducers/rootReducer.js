const initialState = {
  tasks: [
    { id: 1, description: "My first task", isDone: false },
    { id: 2, description: "read A book", isDone: true },
  ],
  filter: "all",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "EDIT_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, description: action.payload.description }
            : task
        ),
      };
      case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, isDone: !task.isDone } : task
        ),
      };
    case "FILTER_TASKS":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
