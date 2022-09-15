import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '../Components/Footer';

export function Add() {
    const navigate = useNavigate();
  
  return (
    <>
        <div className="min-h-screen absolute top-2 min-w-full">       
            <h1>Em desenvolvimento</h1>      
            <button
                className="btn btn-success btn-start m-1"
                onClick={() => navigate('/')}
            >
            Voltar
            </button>
        </div>
        <div className="absolute bottom-0 min-w-full">
            < Footer />
        </div>
    </>
    );

}
