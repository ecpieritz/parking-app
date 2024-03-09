import Link from "next/link";
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    // Adiciona um event listener para atualizar windowWidth quando a janela é redimensionada
    window.addEventListener('resize', handleResize);
    // Define windowWidth na inicialização
    setWindowWidth(window.innerWidth);
    // Remove o event listener quando o componente é desmontado
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imagePath = windowWidth <= 760 ? 'pp-logo-white-mini.svg' : 'pp-logo-white.svg';

  return (
    <header className="pp-bg-blue text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div>
        <img src={`/imgs/${imagePath}`} alt="Logo" />
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li className="hover:underline"><Link href="/entrada">Entrada</Link></li>
            <li className="hover:underline"><Link href="/saida">Saída</Link></li>
          </ul>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="block text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Menu hamburguer */}
      {isOpen && (
        <div className="md:hidden">
          <ul className="mt-2">
            <li className="block px-4 py-2 text-sm text-white"><Link href="/entrada">Entrada</Link></li>
            <li className="block px-4 py-2 text-sm text-white"><Link href="/saida">Saída</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
}