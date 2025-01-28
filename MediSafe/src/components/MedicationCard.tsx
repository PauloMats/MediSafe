// components/MedicationCard.tsx
import { Card } from 'react-bootstrap';
import styles from './MedicationCard.module.css';

const MedicationCard = ({ medication }) => (
  <Card className={`mb-3 ${styles.medicationCard}`}>
    <Card.Body>
      <Card.Title>{medication.name}</Card.Title>
      <Card.Text>
        Dose recomendada: {medication.dose}
        {/* Adicione mais informações conforme necessário */}
      </Card.Text>
    </Card.Body>
  </Card>   
);

export default MedicationCard;
