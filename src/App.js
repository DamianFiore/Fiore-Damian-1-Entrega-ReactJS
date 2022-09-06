import './App.css';
import {Productos} from './components/Productos'
import {Atom} from './components/AtomC'
import {NavBar} from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <Atom/>
      <NavBar/>
      <ItemDetailContainer Itemid={2}/>
      <Productos/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
