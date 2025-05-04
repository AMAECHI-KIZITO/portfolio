import React, { useState, useEffect } from 'react';
import {Route, Routes, BrowserRouter} from "react-router-dom";

// Components Import
import Home from './components/Homepage';

function App() {
  return (
    <div className="App container-lg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Home/> } />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
