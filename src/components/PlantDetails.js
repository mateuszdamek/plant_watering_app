import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent } from '@mui/material';


const PlantDetails = () => {
    const { id } = useParams();
    const plant = useSelector(state => state.plants.plants.find(p => p.id === parseInt(id)));

    if (!plant) return <div>Plant not found</div>;

    return (
        <Container>
            {plant ? (
                <Card>
                    <CardContent>
                        <Typography variant="h4" gutterBottom>
                            {plant.name}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Description: {plant.description}
                        </Typography>
                        <Typography variant="body1" gutterBottom>
                            Watering Interval: {plant.wateringInterval} days
                        </Typography>
                    </CardContent>
                </Card>
            ) : (
                <Typography variant="body1">
                    Plant not found.
                </Typography>
            )}
        </Container>
    );
};

export default PlantDetails;
