import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const PharmacyList = () => {
  const [acceptedPharmacies, setAcceptedPharmacies] = useState([]);
  const [rejectedRequests, setRejectedRequests] = useState([]);

  useEffect(() => {
    fetchAcceptedPharmacies();
    fetchRejectedRequests();
  }, []);

  const fetchAcceptedPharmacies = async () => {
    try {
      const response = await axios.get('https://api-backend-pharmacie-production.up.railway.app/api/pharmacy-requests/accepted');
      setAcceptedPharmacies(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des pharmacies acceptées:', error);
    }
  };

  const fetchRejectedRequests = async () => {
    try {
      const response = await axios.get('https://api-backend-pharmacie-production.up.railway.app/api/pharmacy-requests/rejected');
      setRejectedRequests(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des demandes de pharmacie refusées:', error);
    }
  };

  return (
    <div>
        <Navbar/>
        <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Liste des pharmacies acceptées :</h1>
      <table className="table-auto w-full">
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Adresse</th>
            <th className="px-4 py-2">Latitude</th>
            <th className="px-4 py-2">Longitude</th>
            <th className="px-4 py-2">Zone</th>
          </tr>
        </thead>
        <tbody>
          {acceptedPharmacies.map((pharmacy) => (
                <tr key={`accepted-${pharmacy.id}`}>

              <td>{pharmacy.nom}</td>
              <td>{pharmacy.adresse}</td>
              <td>{pharmacy.laltitude}</td>
              <td>{pharmacy.longitude}</td>
              <td>{pharmacy.zone && pharmacy.zone.nom}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <br/>
      <br/>
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Liste des demandes de pharmacie refusées :</h1>
      <table className="table-auto w-full">
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Adresse</th>
            <th className="px-4 py-2">Latitude</th>
            <th className="px-4 py-2">Longitude</th>
            <th className="px-4 py-2">Zone</th>
          </tr>
        </thead>
        <tbody>
          {rejectedRequests.map((request) => (
             <tr key={`rejected-${request.id}`}>
              <td>{request.nom}</td>
              <td>{request.adresse}</td>
              <td>{request.laltitude}</td>
              <td>{request.longitude}</td>
              <td>{request.zone && request.zone.nom}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </main>
      </div>
    </div>
  );
};

export default PharmacyList;
