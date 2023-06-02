import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm";
import AdminDashboard from "./components/AdminDashboard";
import ClientDashboard from "./components/Demande";
import CityForm from "./components/CityForm";
import City from "./components/City";
import GardeForm from "./components/GardeForm";
import ZoneForm from "./components/ZoneForm";
import Zone from "./components/Zone";
import Garde from "./components/Garde";
import Demmande from "./components/Demande";
import User from "./components/User";
import PharmacyList from "./components/PharmacyList ";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LoginForm />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/ville" element={<City />} />
          <Route path="/create-city" element={<CityForm />} />
          <Route path="/create-garde" element={<GardeForm />} />
          <Route path="/Demande" element={<Demmande />} />
          <Route path="/user" element={<User />} />
          <Route path="/pharmacyList" element={<PharmacyList />} />

          
          <Route path="/create-zone" element={<ZoneForm />} />
          <Route exact path="/zone" element={<Zone />} />
          <Route path="/garde" element={<Garde />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
