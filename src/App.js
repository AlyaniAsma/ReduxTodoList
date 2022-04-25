import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Filter from "./Component/FilterTask";
import AddTasks from "./Component/AddTask";
import TaskList from "./Component/TaskList";

function App() {
  return (
    <div className="App">
      <h1 className=".App-header">My ToDo List</h1>
      <AddTasks />
      <br />
      <Filter />
      <br />
      <TaskList />
    </div>
  );
}

export default App;
