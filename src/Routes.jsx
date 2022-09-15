import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Add } from './Pages/Add';
import { Pronunciation } from './Pages/Pronunciation';
import './styles.css';

function AllRoutes() {
  return (
    <Routes>      
      <Route path="/" element={< Pronunciation />} />
      <Route path="/Add" element={< Add />} />      
      <Route path="*" element={<h3>Not Found</h3>} />
    </Routes>
  );
}
export default AllRoutes;