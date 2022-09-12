import './App.css';
import logo from './logo.svg';
import ToDoList from './components/ToDoList';
import NewTDForm from './components/NewTDForm';

const TDArray = [
  'Attend a GIAthering',
  'Eat a big GIAlic',
  'Observe the GIAlaxy',
  '4th element',
];

function App() {
  return (
    <div className="App">
      <h1>React To Do List</h1>
      <ToDoList xyz={TDArray} />
      <hr />
      <NewTDForm />
    </div>
  );
}

export default App;
