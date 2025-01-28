// app/about/page.tsx
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Sobre o MediSafe</h1>
      <p>
        MediSafe é uma ferramenta para auxiliar médicos e enfermeiros no cálculo de doses de medicamentos para crianças, com base em peso, idade, altura e outros fatores.
      </p>
      <p>
        Nosso objetivo é permitir que os profissionais de saúde tenham mais eficiência em seu trabalho e mais tempo para o cuidado com os pacientes.
      </p>
    </div>
  );
}
