import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, List, ListItem, ListItemText, Button, Card, CardContent, CardActions } from '@mui/material';
import { addWateringLog } from '../store/plantsSlice';
import OpacityIcon from '@mui/icons-material/Opacity';
import WaterIcon from '@mui/icons-material/Water';

const WateringLog = () => {
    const plants = useSelector(state => state.plants.plants);
    const wateringLog = useSelector(state => state.plants.wateringLog);
    const dispatch = useDispatch();

    const handleWaterPlant = (plant) => {
        const newLog = {
            id: Date.now(),
            name: plant.name,
            date: new Date().toISOString()
        };
        dispatch(addWateringLog(newLog));
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Watering Log
            </Typography>
            <List>
                {plants.map(plant => (
                    <Card key={plant.id} style={{ marginBottom: '10px' }}>
                        <CardContent>
                            <ListItem>
                                <OpacityIcon style={{ marginRight: '10px' }} />
                                <ListItemText primary={plant.name} />
                            </ListItem>
                        </CardContent>
                        <CardActions>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleWaterPlant(plant)}
                                startIcon={<WaterIcon />}
                            >
                                Water
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </List>
            <Typography variant="h6" gutterBottom>
                Watering History
            </Typography>
            <List>
                {wateringLog.map(log => (
                    <Card key={log.id} style={{ marginBottom: '10px' }}>
                        <CardContent>
                            <ListItem>
                                <ListItemText primary={`${log.name} watered on ${new Date(log.date).toLocaleString()}`} />
                            </ListItem>
                        </CardContent>
                    </Card>
                ))}
            </List>
        </Container>
    );
};

export default WateringLog;
