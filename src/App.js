import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import ListadoPokemon from './pages/ListadoPokemon';
import Navhome from './pages/components/NavHome';

function App() {
  return (
    <div className="App">
        <section className='nav'>            
          <Navhome/>            
        </section>
        
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/listadoPokemon' element={<ListadoPokemon/>}/>
          </Routes>          
        </BrowserRouter>
    </div>
  );
}

export default App;
