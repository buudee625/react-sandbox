import logo from './logo.svg';
import ToDoList from './components/ToDoList';
import './App.css';
import TDSubmit from './components/TDSubmit';
import NewTDForm from './components/NewTDForm';

function App() {
  return (
    <div className="App">
      <h1>React To Do List</h1>
      <ToDoList />
      <hr />
      <NewTDForm />
    </div>
  );
}

export default App;
