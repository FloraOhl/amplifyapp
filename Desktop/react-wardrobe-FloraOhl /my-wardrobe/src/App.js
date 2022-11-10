import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css';
import Header from './components/Header';
import Container from './components/Container';
import Creator from './components/Creator'
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';
const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path='/' element={<Container />} />
          <Route path='/new' element={<Creator />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/about' element= {<About />} />
          {/* // {<div>This is my about page. Need to create a component for this!</div>} />
          <Route path='*' element={<div> Page not found</div>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}



export default App;
