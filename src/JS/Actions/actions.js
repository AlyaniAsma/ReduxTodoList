import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTERTask,
} from "../Actiontypes/actionstypes";

/*import {
  ADD_TASK,
  COMPLETE_TASK,
  DELETE_TASK,
  EDIT_TASK,
  FILTERTask,
} from "./JS/Actiontypes/actiontypes";
*/
export const addTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask,
  };
};

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const complete = (id) => ({
  type: COMPLETE_TASK,
  payload: id,
});

export const editTask = (id, value) => ({
  type: EDIT_TASK,
  payload: { id, value },
});

export const filtertask = (status) => {
  return { type: FILTERTask, payload: status };
};
