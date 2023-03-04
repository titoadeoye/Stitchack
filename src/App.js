import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import {NavBar} from './components';
import Landing from './pages/Landing/Landing';


function App() {
  return (
    <>

      <Router>
          <NavBar />
          <Suspense fallback={<div>Loading....</div>}>

            <Routes>

              <Route exact path='/' element={<Landing />} />\
              <Route path='*' element={<Landing /> }/>

            </Routes>
          </Suspense>
      </Router>
    </>
  );
}

export default App;
