import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import axios from 'axios';

function Garde() {
const [garde, setGarde] = useState([]);
const option = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const d = new Date();

var date = d.toLocaleDateString("en-US", option).replace(/,/g, " ");

useEffect(() => {
  axios.get("https://api-backend-pharmacie-production.up.railway.app/api/garde/all").then((response) => {
      setGarde(response.data);
  });
}, []);
const handleDelete = (id) => {
  if (window.confirm("Are you sure you want to delete this city?")) {
    axios.delete(`https://api-backend-pharmacie-production.up.railway.app/api/garde/delete/${id}`).then(() => {
      setGarde(garde.filter((v) => v.id !== id));
    });
  }
};
const handleEdit = (id) => {
  const newType = window.prompt("Enter the new type for this garde:");
  if (newType) {
    axios.put(`https://api-backend-pharmacie-production.up.railway.app/api/garde/${id}`, {type:newType}).then(() => {
      setGarde(garde.map((e) => {
        if (e.id === id) {
          return { ...e, nom: newType };
        }
        return e;
      }));
    });
  }
};

  return (
    <div>
    <Navbar/>
    <div className="min-h-screen bg-gray-100">
          <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
            <div className="flex flex-col sm:flex-row   space-y-3 sm:space-y-0 items-center space-x-3">
              <div className="flex items-center text-xs bg-[#1B262C] text-white  rounded">
                <span className="px-3 ">{date}</span>
                <i className="bx bx-calendar text-[20px] text-black bg-teal-500 py-5 px-3"></i>
              </div>
              <div
            
              className="flex items-center text-s rounded space-x-1 py-2 px-3 bg-[#1B262C] text-white hover:text-teal-500  duration-100 cursor-pointer"
            >
              <i className="bx bx-plus-circle  "></i>
              <Link to={"/create-garde"}>
              <span>Ajouter une garde</span>
              </Link>
            </div>
            </div>
    
            <div className="overflow-x-auto" style={{ marginTop: '20px' }}>
            <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Liste des gardes</h1>

              <table className="table-auto w-full">
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                    <th className="px-4 py-2">Id</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-6 py-2">Action</th>
                    <th className="px-6 py-2"></th>
                  </tr>
                </thead>
                <tbody>
    
                {garde.map((v, index) => (
                        <tr
                          key={index}
                          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {v.id}
                          </th>
                          <td className="px-6 py-4 text-white  font-medium text-center">{v.type}</td>
    
                          <td className="px-6 py-4">
                  
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline items-center" onClick={() => handleEdit(v.id)}>
                    Edit
                              </button>
                  </td>
                          <td className="px- py-4">
                      <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline items-center" onClick={() => handleDelete(v.id)}>
                                  Delete
                              </button>
                      </td>
                        </tr>
                      ))}
    
                </tbody>
              </table>
            </div>
    
            
          </main>
        </div>
    </div>
  )
}

export default Garde