import './App.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/book" element={<Book/>}/>
      </Routes>
    </>
  )
}

export default App
