import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://api-backend-pharmacie-production.up.railway.app/api/login', { email, password });
      // Traitement de la réponse de l'API
      console.log(response.data);
      
      const role = response.data.role.toString();
      if (role === 'admin') {
        // Redirection vers la page du tableau de bord de l'administrateur
        navigate('/admin-dashboard');
      } else {
        // Échec de l'authentification, affichage d'un message d'erreur par exemple
      }
      
    } catch (error) {
      // Gestion des erreurs
      console.error(error);
    }
  };

  return (
   
    <div className="  relative flex flex-col h-full ">
      <div
        className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-green-900  ring-2 ring-green-600 lg:max-w-xl"
        style={{ marginTop: "200px" }}
      >
        <h1 className="text-3xl font-semibold text-center text-[#94a3b8] font-serif ">
        Connectez-vous à votre espace pharmacien
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input id="email"
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-green-300 bg-white border rounded-md focus:border-green-600 focus:ring-green-300focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full px-4 py-2 mt-2 text-green-300 bg-white border rounded-md focus:border-green-600 focus:ring-green-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
         
          <div className="mt-6">
            <button
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform  rounded-md hover:bg-green-300 focus:outline-none focus:bg-green-300"
              style={{ background: "#a6d5cc" }}
             
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Don't have an account?{" "}
         
          <button>
          Sign up
          </button>
        
        </p>
      </div>
    </div>
  
  );
}

export default LoginForm;
