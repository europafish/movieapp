import './App.css';
import React from "react";
import Home from './routes/Home';
import About from './routes/About';
import { HashRouter,Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './components/Detail';

function App(){
  return (
    // 
    //   <Routes>
    //     <Route path="/" exact={true} element={Home} />
    //     <Route path="/about" element={About}/>
    <HashRouter>
      <Navigation/>

<Routes>
	<Route path="/" element={<Home/>}/>
	<Route path="/about" element={<About/>} />
  <Route path="/movie-detail" element={<Detail/>} />
  
</Routes>
</HashRouter>
  );
}

export default App;
