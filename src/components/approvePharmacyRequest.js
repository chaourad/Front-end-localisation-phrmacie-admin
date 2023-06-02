import axios from 'axios';

const approvePharmacyRequest = async (requestId, userId) => {
  try {
    // Appeler l'API pour approuver la demande de pharmacie
    await axios.put(`https://api-backend-pharmacie-production.up.railway.app/api/pharmacy-requests/${requestId}/approve`);

    // Appeler l'API pour mettre à jour le rôle de l'utilisateur
    await axios.put(`https://api-backend-pharmacie-production.up.railway.app/api/users/${userId}/role`, { role: 'pharmacien' });

    // Effectuer d'autres actions nécessaires après l'approbation
    // ...
  } catch (error) {
    console.error('Erreur lors de l\'approbation de la demande de pharmacie:', error);
    // Gérer les erreurs
    // ...
  }
};

export default approvePharmacyRequest;
