import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import NoMatch from './pages/NoMatch/NoMatch';
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Maintenance from "./pages/Maintenance/Maintenance";


function App() {
  return (
    <>
      <Router>
          <Suspense fallback={<div>Loading....</div>}>

            <Routes>

              <Route exact path='/' element={<Landing />} />\
              <Route exact path='register' element={<Register />} />\             
              <Route exact path='signin' element={<Login />} />\
              <Route exact path='app' element={<Maintenance />} />\
              <Route path='*' element={<NoMatch /> }/>

            </Routes>
          </Suspense>
      </Router>
    </>
  );
}

export default App;
