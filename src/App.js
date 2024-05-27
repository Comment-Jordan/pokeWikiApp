import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import ListadoPokemon from './pages/ListadoPokemon';
import Navhome from './pages/components/NavHome';
import InfoTipoPokemon from './pages/InfoTipoPokemon';

function App() {
  return (
    <div className="App">        
        <BrowserRouter>
            <Navhome/>            
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/listadoPokemon' element={<ListadoPokemon/>}/>
              <Route path='/infoTipo/:id' element={<InfoTipoPokemon/>}/>
          </Routes>          
        </BrowserRouter>
    </div>
  );
}

export default App;
