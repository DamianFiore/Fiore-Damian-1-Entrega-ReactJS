import './App.css';
import {Productos} from './components/Productos'
import {Atom} from './components/AtomC'
import {NavBar} from './components/NavBar'
import {ItemProducto} from './components/ItemListContainer'

import cafe from '../src/imgcafe.jpg'

function App() {
  return (
    <div className="App">
      <Atom/>
      <NavBar/>
      <Productos/>
      <ItemProducto imagen={cafe} nombre="Cafe espresso" precio="$1200" cantidad="500 gr"/>
      <ItemProducto imagen={cafe} nombre="Cafe torrado" precio="$1000" cantidad="1000 gr"/>
      <ItemProducto imagen={cafe} nombre="Cafe de especialidad" precio="$1800" cantidad="250 gr"/>
    </div>
  );
}

export default App;
