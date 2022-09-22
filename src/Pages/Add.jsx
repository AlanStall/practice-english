import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Add() {
    const navigate = useNavigate();
  
  return (
    <div className='grid place-items-center'>
        <h1 className='font-bold text-[24px] mt-5'>Em desenvolvimento</h1>
        <button
            className="btn btn-success btn-start m-1"
            onClick={() => navigate('/')}
        >
        Voltar
        </button>        
    </div>
    );
}