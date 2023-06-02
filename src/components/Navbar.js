import React from 'react'
import { Link } from 'react-router-dom'
import { IoLocationSharp } from 'react-icons/io5';

function Navbar() {
    const [menuOpen, setMenuOpen] = React.useState(false);
      
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  return (
    <div className="container mx-auto py-4 px-6 flex justify-between items-center">
                  <a href="/admin-dashboard" className=" flex  items-cente text-lg font-bold text-gray-800" > <IoLocationSharp size={30} height={10} color={"red"} /> <span>Pharmacie</span></a>
                  <button className="sm:hidden" onClick={toggleMenu}>
                    <svg viewBox="0 0 20 20" fill="currentColor" className="menu-icon w-6 h-6">
                      <path fillRule="evenodd" d="M3 3h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2zm0 5h14a1 1 0 0 1 0 2H3a1 1 0 1 1 0-2z" clipRule="evenodd" />
                    </svg>
                  </button>
      
                  <nav className={`${menuOpen ? "block" : "hidden"
                    } sm:block sm:flex`}>
                    <ul className="flex flex-wrap items-center justify-between gap-x-4 text-sm font-medium text-black">
                      <li className="nav-item"> <Link to="/admin-dashboard" className="px-3 py-2 text-gray-600 hover:text-blue-500 ">Dashboard</Link></li>
                      <li className="nav-item"> <Link to="/ville" className="px-3 py-2 text-gray-600 hover:text-gray-800 "> Ville</Link></li>
                      <li className="nav-item"> <Link to="/zone" className="px-3 py-2 text-gray-600 hover:text-gray-800">Zone</Link></li>
                      <li className="nav-item"> <Link to="/Demande" className="px-3 py-2 text-gray-600 hover:text-gray-800 ">Demande</Link></li>
                      <li className="nav-item"> <Link to="/garde" className="px-3 py-2 text-gray-600 hover:text-gray-800 ">Garde</Link></li>
                      <li className="nav-item"> <Link to="/user" className="px-3 py-2 text-gray-600 hover:text-gray-800 ">User</Link></li>
                      <li className="nav-item"> <Link to="/pharmacyList" className="px-3 py-2 text-gray-600 hover:text-gray-800 ">PharmacyList</Link></li>
                      <li className="nav-item"> <Link to="/" className="px-3 py-2 text-gray-600 hover:text-gray-800 ">Logout</Link></li>

                    </ul>
                  </nav>
      
                </div>
  )
}

export default Navbar