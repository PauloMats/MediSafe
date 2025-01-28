// src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import { getMedications } from "../../utils/api-medicationData";
import { Medication } from "../../utils/types";
import "./home.css";
import Header from "../../components/Header";

const Home: React.FC = () => {
  const [, setMedications] = useState<Medication[]>([]);

  useEffect(() => {
    getMedications().then((data) => setMedications(data));
  }, []);

  return (
    <div className="page">
        <Header />
    </div>
  );
};

export default Home;
