import './custom.css'
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Book from './pages/Book';
import Header from './components/Header';
import Footer from './components/Footer';
import { StoreProvider, createStore } from 'easy-peasy';
import { globalState } from './model';

function App() {

  const store = createStore(globalState);

  return (
    <>
      <StoreProvider store={store}>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/book" element={<Book/>}/>
        </Routes>
        <Footer/>
      </StoreProvider>
    </>
  )
}

export default App
