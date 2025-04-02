import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="flex flex-1">
        {/* Sidebar - hidden on mobile, shown on md screens and up */}
        <div className="hidden md:block w-64 bg-white shadow-md">
          <Sidebar />
        </div>
        
        {/* Main Content Area */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
      
      <Footer  />
    </div>
  );
};

export default Layout;