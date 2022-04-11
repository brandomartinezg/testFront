import CardHeader from '@mui/material/CardHeader';
import Card from '@mui/material/Card';
import { Result } from '../interfaces/pokedex';

const CardComponent = ({name, url}:Result) => {
  return (
    <Card sx={{ minHeight: '10rem' }}>
        <CardHeader
            title={`${name}`}
        />
    </Card>
  )
}

export default CardComponent;
