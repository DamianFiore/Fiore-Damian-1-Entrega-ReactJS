import './App.css';
import {Productos} from './Productos'
import {Atom} from './AtomC'
import {Navi} from './navi'

function App() {
  return (
    <div className="App">
      <Atom/>
      <Navi/>
      <Productos/>
    </div>
  );
}

export default App;
