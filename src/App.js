import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import {NavBar} from './components';
import Maintenance from './pages/Maintenance/Maintenance';
import NoMatch from './pages/NoMatch/NoMatch';
import Landing from "./pages/Landing/Landing";

function App() {
  return (
    <>

      <Router>
          <NavBar />
          <Suspense fallback={<div>Loading....</div>}>

            <Routes>

              <Route exact path='/' element={<Landing />} />\
              <Route path='*' element={<NoMatch /> }/>

            </Routes>
          </Suspense>
      </Router>
    </>
  );
}

export default App;
