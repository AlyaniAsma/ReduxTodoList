import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTERTask,
} from "../Actiontypes/actionstypes";

const initialState = {
  taskList: [
    {
      id: 0,
      task: "Learn HTML",
      isDone: true,
    },
    {
      id: 1,
      task: "Learn CSS",
      isDone: true,
    },
    {
      id: 2,
      task: "Learn Javascript",
      isDone: false,
    },
  ],
  status: "All",
};

const taskreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, taskList: [...state.taskList, payload] };
    case DELETE_TASK:
      return {
        ...state,
        taskList: state.taskList.filter((todo) => todo.id !== payload),
      };
    case COMPLETE_TASK:
      return {
        ...state,
        taskList: state.taskList.map((todo) =>
          todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
        ),
      };
    case EDIT_TASK:
      return {
        ...state,
        taskList: state.taskList.map((todo) =>
          todo.id === payload.id ? { ...todo, task: payload.value } : todo
        ),
      };
    case FILTERTask:
      return {
        ...state,
        status: payload,
      };
    default:
      return state;
  }
};

export default taskreducer;
