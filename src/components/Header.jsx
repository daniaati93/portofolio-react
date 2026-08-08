import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';


function Header() {
  return (
    <header>
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-end items-center">
            <div className="hidden md:flex items-center space-x-10 font-medium">
              <Link to='/' className="text-[#21243D] hover:text-[#FF6464] transition-colors">Accueil</Link>
              <Link to= '/works' className="text-[#21243D] hover:text-[#FF6464] transition-colors">Works</Link>
              <Link to= '/blog' className="text-[#21243D] hover:text-[#FF6464] transition-colors">Blog</Link>
              <Link to= '/contact' className="text-[#21243D] hover:text-[#FF6464] transition-colors">Contact</Link>
            </div>
            
            
            <div className="md:hidden flex items-center">
              <Menu size={45}  color='#21243D' />
            </div>
      </nav>
    </header>
  );
}

export default Header;