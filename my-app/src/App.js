import React from 'react';
import { Outlet } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import HomePage from './components/HomePage';
// import NewDestination from './components/NewDestination';
// import FavoritePage from './components/FavoritePage';

//work on this tomorrow
function App() {
  return (
    <div>
      <Outlet />
{/*     <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/newdestination" element={<NewDestination />} />
            <Route path="/favorites" element={<FavoritePage />} />
        </Routes> */}
    </div>
   
  );
}

export default App;

//work on this tomorrow
