import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import BookList from './components/BookList'


function App() {
  return (<BrowserRouter>
    <Routes>
      <Route index element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/booklist' element={<BookList />} />
    </Routes>
  </BrowserRouter>);
}

export default App;
