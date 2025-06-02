import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 flex justify-between">
      <h1 className="text-xl font-bold">Meu Portfólio</h1>
      <ul className="flex space-x-4">
        {['/', '/about', '/education', '/experience', '/projects', '/game'].map((path, i) => (
          <li key={i}>
            <Link href={path} className="hover:underline">
              {path === '/' ? 'Home' : path.replace('/', '')}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}