import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, Typography, List, ListItem, ListItemText, Card, CardContent, CardActions } from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';

const PlantList = () => {
    const plants = useSelector(state => state.plants.plants);

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Your Plants
            </Typography>
            <List>
                {plants.map(plant => (
                    <Card key={plant.id} style={{ marginBottom: '10px' }}>
                        <CardContent>
                            <ListItem component={Link} to={`/plants/${plant.id}`}>
                                <LocalFloristIcon style={{ marginRight: '10px' }} />
                                <ListItemText primary={plant.name} />
                            </ListItem>
                        </CardContent>
                    </Card>
                ))}
            </List>
        </Container>
    );
};

export default PlantList;
