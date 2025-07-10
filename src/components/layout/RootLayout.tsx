import { Outlet } from 'react-router-dom';
import Header from './Header';
import Toaster from '../Toaster';

// Compositional Layout
const RootLayout = () => {
  return (
    <main className="min-h-screen bg-[#f6f5f8] dark:bg-slate-800 =">
      <Header />
      <div className="max-w-3xl mx-auto p-4">
        <Outlet />
      </div>
      <Toaster />
    </main>
  );
};

export default RootLayout;
