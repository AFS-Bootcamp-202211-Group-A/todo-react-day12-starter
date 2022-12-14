import "./App.css";
import TodoList from "./features/TodoList";
import PromiseMsg from "./PromiseMsg"

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
      {/* <PromiseMsg/> */}
    </div>
  );
}

export default App;
