// components/Navbar.tsx
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center gap-2">
          {/* Ajout du logo */}
          <img
            src="/transparent.png"
            alt="Farmly Logo"
            className="w-10 h-10 object-contain"
          />
          <div className="text-lg font-bold text-gray-900 dark:text-gray-100">
            <Link href="/">Farmly</Link>
          </div>
        </div>
        <ul className="flex gap-4">
          <li>
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/support"
              className="text-gray-700 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400 transition"
            >
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
