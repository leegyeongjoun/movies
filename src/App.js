import React from 'react';
import Navigation from './components/Navigation';
import {HashRouter, Routes, Route} from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Detail from './routes/Detail';


const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        {/* 시작하자마자 Home이 나오게하기위해 */}
        <Route path='/' element={<Home />} /> 
        <Route path='/about' element={<About />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </HashRouter>
  );
};

export default App;