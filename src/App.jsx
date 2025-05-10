import './custom.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/book" element={<Book/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
