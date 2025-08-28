import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const active = ({ isActive }) => isActive ? 'text-sky-500 font-semibold' : 'hover:text-sky-500';
  return (
    <nav className="flex justify-between items-center p-6 bg-white shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800">Himanshu Bagga</h1>
      <div className="space-x-6 text-gray-700 font-medium">
        <NavLink to="/" className={active}>About</NavLink>
        <a href="https://github.com/TheBugHunter-HimanshuBagga" className="hover:text-sky-500">GitHub</a>
        <a href="https://www.linkedin.com/in/himanshu-bagga-30b747323/" className="hover:text-sky-500">LinkedIn</a>
      </div>
    </nav>
  );
}