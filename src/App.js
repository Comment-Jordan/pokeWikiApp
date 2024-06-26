import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/home'
import ListadoPokemon from './pages/ListaPokemon';
import Navhome from './pages/components/NavHome';
import InfoTipoPokemon from './pages/InfoTipoPokemon';
import ListadoTipos from './pages/ListaTipos';
import ListadoMovimientos from './pages/ListadoMoviminetos';
import InfoPokemon from './pages/InfoPokemon';
import InfoMovimiento from './pages/InfoMovimiento';

function App() {
  return (
    <div className="App">        
        <BrowserRouter>
            <Navhome/>            
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/infoPokemon/:id' element={<InfoPokemon/>}/>
              <Route path='/listadoPokemon' element={<ListadoPokemon/>}/>
              <Route path='/listadoMovimientos' element={<ListadoMovimientos/>}/>
              <Route path='/infoTipo' element={<ListadoTipos/>}/>
              <Route path='/infoTipoPokemon/:id' element={<InfoTipoPokemon/>}/>
              <Route path='/infoMovimiento/:id' element={<InfoMovimiento/>}/>
          </Routes>          
        </BrowserRouter>
    </div>
  );
}

export default App;
