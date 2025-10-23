import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white p-5 flex justify-between items-center shadow-lg sticky top-0 z-50">
      <h1 className="text-2xl font-extrabold tracking-wide cursor-pointer select-none">MuscleMax</h1>
      <nav className="space-x-6 text-lg font-medium">
        <Link
          to="/"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Início
        </Link>
        <Link
          to="/sobre"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Sobre
        </Link>
        <Link
          to="/contato"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          Contato
        </Link>
        <Link
          to="/login"
          className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-md font-semibold hover:bg-yellow-300 transition-colors duration-300"
        >
          Entrar
        </Link>
      </nav>
    </header>
  );
}
