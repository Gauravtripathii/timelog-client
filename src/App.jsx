import React from 'react'
import Registeration from './Components/registeration' 
import TestHome from './Components/TestHome';
import Home from './Components/Home';
import Profile from './Components/Profile';
import About from './Components/Testabout'

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <div className='overflow-x-hidden'>
        {/* <Registeration /> */}
        <TestHome />
        
        {/* <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />

        </Routes> */}
        {/* <Profile /> */}
        {/* <About /> */}
      </div>
    </BrowserRouter>
  );
}

export default App