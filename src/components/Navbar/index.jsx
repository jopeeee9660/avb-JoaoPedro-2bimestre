import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-blue-700 shadow-md px-8 py-4 flex items-center justify-between">
      {/* Links de navegação */}
      <div className="flex items-center gap-8">
        <Link
          to="/"
          className="text-gray-100 text-lg font-medium hover:text-blue-400 transition-colors duration-300 uppercase tracking-wide"
        >
          Home
        </Link>

        <Link
          to="/favoritos"
          className="text-gray-100 text-lg font-medium hover:text-blue-400 transition-colors duration-300 uppercase tracking-wide"
        >
          Favoritos
        </Link>
      </div>

      {/* (Opcional: Removi o botão hamburguer) */}
    </nav>
  );
};

export default Navbar;
