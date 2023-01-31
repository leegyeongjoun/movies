import React from 'react';
import Navigation from './components/Navigation';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';


const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        {/* 시작하자마자 Home이 나오게하기위해 */}
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/movie-detail' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;