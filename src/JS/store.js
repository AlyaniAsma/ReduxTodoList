import { createStore } from "redux";
import combreducers from "./Reducer/combreducer";
const devtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(combreducers, devtools);
export default store;
