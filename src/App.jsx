import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import Register from './components/Register';

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
    </>
  )
}

export default App
