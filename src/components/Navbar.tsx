
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex justify-between items-center">
      <Link to="/">
        <Logo variant="cube" />
      </Link>
      <div className="hidden md:flex space-x-12 text-white uppercase tracking-wider text-sm">
        <a href="#sobre" className="hover:text-neura-yellow transition-colors">SOBRE</a>
        <a href="#servicos" className="hover:text-neura-yellow transition-colors">SERVIÇOS</a>
        <a href="#contato" className="hover:text-neura-yellow transition-colors">CONTATO</a>
      </div>
      <button className="md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
      </button>
    </nav>
  );
};

export default Navbar;
