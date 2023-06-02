import React, { Fragment, useEffect, useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios';

export default function AdminDashboard() {
  const [countville , setCountville]= useState()

  useEffect(() => {
    axios.get("https://api-backend-pharmacie-production.up.railway.app/api/villes/count").then((response) => {
      setCountville(response.data);
    });
  }, []);

 
  return (
    <div> 
        <Navbar/>
    <div className="min-h-screen ">
    <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
       
    <Fragment>
      
   
      <div className="container">
        <h1 className="text-3xl font-medium text-gray-800">Dashboard</h1>
    
    </div>
    <div className="bg-white py-6">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-gray-200 rounded-md shadow-lg p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Villes</h2>
            <p className="text-gray-600 font-semibold">Total villes:  {countville}</p>
          </div>
          <div className="bg-gray-200 rounded-md shadow-lg p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Pharmacies</h2>
            <p className="text-gray-600 font-semibold">Total pharmacies: </p>
          </div>
          <div className="bg-gray-200 rounded-md shadow-lg p-6">
            <h2 className="text-lg font-medium text-gray-800 mb-4">Users</h2>
            <p className="text-gray-600 font-semibold">Total users: </p>
          </div>
        </div>
      </div>
      <div>
      </div>
      </div>
   

      </Fragment>
      </main>
      </div>
      </div>
  )
}
