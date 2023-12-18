import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import PokedexPage from './pages/PokedexPage';
import PokedexIdPages from './pages/PokedexIdPages';
import ProtectedRoutes from './pages/ProtectedRoutes';


function App() {

  return (
  <div className='app'>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route element={<ProtectedRoutes/>}>
      <Route path='/pokedex' element={<PokedexPage/>}/>
      <Route path='/pokedex/:id' element={<PokedexIdPages/>}/>
      </Route>
    </Routes>
  </div>
  )
}

export default App;