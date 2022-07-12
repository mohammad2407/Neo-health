import logo from './logo.svg';
import './App.css';
import { Addtodo } from './Components/Addtodo';
import { Todolist } from './Components/Todolist';

function App() {
  return (
    <div className="App">
     <Addtodo />
     <Todolist />
    </div>
  );
}

export default App;
