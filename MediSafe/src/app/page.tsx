// src/app/page.tsx
"use client";

import { useEffect, useState } from 'react';
import MyNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import MedicationCard from '../components/MedicationCard';
import { getMedications } from '../utils/api-medicationData';
import { Medication } from '../utils/types';
import './home.css';

const Home: React.FC = () => {
  const [medications, setMedications] = useState<Medication[]>([]);

  useEffect(() => {
    getMedications().then(data => setMedications(data));
  }, []);

  return (
    <div className="page">
      <MyNavbar />
      <main className="container mt-4">
        <h1>Bem-vindo ao MediSafe</h1>
        <div className="row">
          {medications.map((medication, index) => (
            <div className="col-md-4" key={index}>
              <MedicationCard medication={medication} />
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
