// app/about/page.tsx
import styles from './about.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <h1>Sobre o MediSafe</h1>
      <p>MediSafe é uma ferramenta para auxiliar médicos e enfermeiros...</p>
    </div>
  );
}
