// src/components/FormularioCalculo.tsx
import { useState } from "react";
import "./styles/FormularioCalculo.css";

const FormularioCalculo = () => {
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [dose, setDose] = useState("");

  const calcularDose = () => {
    // Fórmula simplificada para cálculo de dose
    const calculo = (parseFloat(weight) + parseInt(age)) / 2; // Exemplo
    setDose(calculo.toFixed(2));
  };

  return (
    <div className="calculo-form">
      <h2>Calculadora de Dose</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          calcularDose();
        }}
      >
        <label>
          Peso (kg):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>
        <label>
          Idade (anos):
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </label>
        <button type="submit">Calcular</button>
      </form>
      {dose && <p>Dose Recomendada: {dose} mg</p>}
    </div>
  );
};

export default FormularioCalculo;