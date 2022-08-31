import './App.css';
import {Productos} from './components/Productos'
import {Atom} from './components/AtomC'
import {NavBar} from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'

function App() {
  return (
    <div className="App">
      <Atom/>
      <NavBar/>
      <Productos/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
