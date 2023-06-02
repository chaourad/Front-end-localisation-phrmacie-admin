import React, { useState } from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function CityForm() {
  const [nom, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("https://api-backend-pharmacie-production.up.railway.app/api/villes/save", { nom }).then(() => {
      navigate("/ville");
    });
  };

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gray-100">
    <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
    <div className="flex flex-col space-y-2">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Create Ville</h1>

      <form onSubmit={handleSubmit}  className="flex flex-col space-y-2 ">
        <div className="form-group flex flex-row space-x-4">
          <label htmlFor="name" className="text-lg font-bold text-center" style={{marginTop:'5px'}}>Nom:</label>
          <input
             type="text"
             placeholder="Entre une ville"
            className="form-control bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="name"
            value={nom}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        
        <button type="submit" className="py-2.5 px-6 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
          Create
        </button>
      </form>
    </div>
        </main>
        </div>
    </div>
  )
}

export default CityForm