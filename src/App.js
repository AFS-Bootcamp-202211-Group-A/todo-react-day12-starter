import "./App.css";
import PromiseDemo from "./features/PromiseDemo";
import TodoList from "./features/TodoList";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoList />
      <PromiseDemo />
    </div>
  );
}

export default App;
