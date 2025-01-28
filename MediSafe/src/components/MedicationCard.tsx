// src/components/MedicationCard.tsx
import { Card } from 'react-bootstrap';
import { Medication } from '../utils/types';
import './MedicationCard.css';

interface MedicationCardProps {
  medication: Medication;
}

const MedicationCard: React.FC<MedicationCardProps> = ({ medication }) => (
  <Card className="mb-3 medicationCard">
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
