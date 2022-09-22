import { Outlet } from 'react-router-dom';
import { Footer } from './Components/Footer';

export function App() {
  return (
    <div className='flex flex-col justify-between bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 pt-2 lg:pt-10'>
      <div className="container mx-auto p-2">        
        < Outlet />
      </div>
      < Footer />
    </div>
  );
}