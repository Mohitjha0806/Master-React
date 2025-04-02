import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="app">
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <main className="content">
          {children} {/* This will render the dynamic content */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
