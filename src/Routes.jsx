import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { App } from './App';
import { Add } from './Pages/Add';
import { Pronunciation } from './Pages/Pronunciation';
import './styles.css';

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={< App />}>
        <Route path="/" element={< Pronunciation />} />
        <Route path="/Add" element={< Add />} />        
        <Route path="*" element={<h3 className='grid place-items-center text-2xl'>Not Found</h3>} />
      </Route>
    </Routes>
  );
}
export default AllRoutes;