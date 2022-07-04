import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Horaire from './pages/Horaire';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route  path="*" element={<Horaire />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;