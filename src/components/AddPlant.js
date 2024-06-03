import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button, Container, Typography, Card, CardContent, CardActions } from '@mui/material';
import { addPlant } from '../store/plantsSlice';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddPlant = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [wateringInterval, setWateringInterval] = useState('');
    const dispatch = useDispatch();

    const handleAddPlant = () => {
        const newPlant = {
            id: Date.now(),
            name,
            description,
            wateringInterval: parseInt(wateringInterval)
        };

        dispatch(addPlant(newPlant));
        setName('');
        setDescription('');
        setWateringInterval('');
    };

    return (
        <Container>
            <Typography variant="h4" gutterBottom>
                Add New Plant
            </Typography>
            <Card>
                <CardContent>
                    <TextField
                        label="Plant Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        fullWidth
                        margin="normal"
                    />
                    <TextField
                        label="Watering Interval (days)"
                        value={wateringInterval}
                        onChange={(e) => setWateringInterval(e.target.value)}
                        type="number"
                        fullWidth
                        margin="normal"
                    />
                </CardContent>
                <CardActions>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleAddPlant}
                        startIcon={<AddCircleOutlineIcon />}
                    >
                        Add Plant
                    </Button>
                </CardActions>
            </Card>
        </Container>
    );
};

export default AddPlant;
