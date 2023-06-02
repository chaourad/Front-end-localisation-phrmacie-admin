import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';

const AdminPharmacyRequests = () => {
  const [pharmacyRequests, setPharmacyRequests] = useState([]);

  useEffect(() => {
    // Charger les demandes de pharmacie en attente depuis le backend
    const fetchPharmacyRequests = async () => {
      try {
        const response = await axios.get('https://api-backend-pharmacie-production.up.railway.app/api/pharmacy-requests');
        setPharmacyRequests(response.data);
      } catch (error) {
        console.error('Erreur lors du chargement des demandes de pharmacie:', error.message);
        alert('Une erreur s\'est produite lors du chargement des demandes de pharmacie. Veuillez réessayer plus tard.');
      }
    };

    fetchPharmacyRequests();
  }, []);

  const handleApprove = async (id) => {
    try {
      // Envoyer la requête pour approuver la demande de pharmacie au backend
      await axios.put(`https://api-backend-pharmacie-production.up.railway.app/api/pharmacy-requests/${id}/approve`);

      // Mettre à jour la liste des demandes de pharmacie en mettant à jour le statut de la demande approuvée
      setPharmacyRequests((prevRequests) =>
        prevRequests.map((request) => {
          if (request.id === id) {
            return { ...request, status: 'accepté' };
          }
          return request;
        })
      );

      // Afficher un message de succès ou effectuer une action supplémentaire si nécessaire
      alert('La demande de pharmacie a été approuvée avec succès!');
    } catch (error) {
      console.error('Erreur lors de l\'approbation de la demande de pharmacie:', error.message);
      alert('Une erreur s\'est produite lors de l\'approbation de la demande de pharmacie. Veuillez réessayer plus tard.');
    }
  };

  const handleReject = async (id) => {
    try {
      // Envoyer la requête pour refuser la demande de pharmacie au backend
      await axios.put(`https://api-backend-pharmacie-production.up.railway.app/api/pharmacy-requests/${id}/reject`);

      // Mettre à jour la liste des demandes de pharmacie en mettant à jour le statut de la demande refusée
      setPharmacyRequests((prevRequests) =>
        prevRequests.map((request) => {
          if (request.id === id) {
            return { ...request, status: 'refusé' };
          }
          return request;
        })
      );

      // Afficher un message de succès ou effectuer une action supplémentaire si nécessaire
      alert('La demande de pharmacie a été refusée avec succès!');
    } catch (error) {
      console.error('Erreur lors du refus de la demande de pharmacie:', error.message);
      alert('Une erreur s\'est produite lors du refus de la demande de pharmacie. Veuillez réessayer plus tard.');
    }
  };

  return (
    <div>
       <Navbar/>
       <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-6 py-8 md:px-10 md:py-12 lg:px-16 lg:py-20">
      <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">Demandes de Pharmacie en Attente</h1>
      <table className="table-auto w-full">
      <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className="px-4 py-2">Nom</th>
            <th className="px-4 py-2">Adresse</th>
            <th className="px-4 py-2">Latitude</th>
            <th className="px-4 py-2">Longitude</th>
            <th className="px-4 py-2">id_user</th>
            <th className="px-4 py-2">zone</th>
            <th className="px-4 py-2">Statut</th>
            <th className="px-4 py-2">Action</th>
          </tr>
        </thead>
      
        <tbody>
          {pharmacyRequests.map((request) => (
            <tr key={request.id}>
              <td>{request.nom}</td>
              <td>{request.adresse}</td>
              <td>{request.laltitude}</td>
              <td>{request.longitude}</td>
              <td>{request.user.email }</td>
              {request.zone && request.zone.nom}
              <td>{request.status}</td>
              <td>
                {request.status === 'En attente' && (
                  <div className=' flex flex-row space-x-4 items-center'style={{marginLeft:'40px'}}>
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline items-center" onClick={() => handleApprove(request.id)}>Accepter</button> 
                    <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline items-center" onClick={() => handleReject(request.id)}>Refuser</button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </main>
      </div>
    </div>
  );
};

export default AdminPharmacyRequests;
