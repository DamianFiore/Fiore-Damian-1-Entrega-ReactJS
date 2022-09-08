import './App.css';
import {Productos} from './components/Productos'
import {Atom} from './components/AtomC'
import {NavBar} from './components/NavBar'
import {ItemListContainer} from './components/ItemListContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>     
        <Atom/>   
        <Routes>
          <Route path='/' element={<Productos/>}/>
          <Route path='/productos' element={<ItemListContainer/>}/>
          <Route path='*' element={<Navigate to='/'/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
