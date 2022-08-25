import './App.css';
import {Productos} from './components/Productos'
import {Atom} from './components/AtomC'
import {NavBar} from './components/NavBar'

function App() {
  return (
    <div className="App">
      <Atom/>
      <NavBar/>
      <Productos/>
    </div>
  );
}

export default App;
