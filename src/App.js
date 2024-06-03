import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container, AppBar, Toolbar, Typography, Button } from '@mui/material';
import store from './store/store';
import PlantList from './components/PlantList';
import AddPlant from './components/AddPlant';
import WateringLog from './components/WateringLog';
import PlantDetails from './components/PlantDetails';

function App() {
    return (
        <Provider store={store}>
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" style={{ flexGrow: 1 }}>
                            Plant Watering Reminder
                        </Typography>
                        <Button color="inherit" component={Link} to="/">
                            My Plants
                        </Button>
                        <Button color="inherit" component={Link} to="/add">
                            Add Plant
                        </Button>
                        <Button color="inherit" component={Link} to="/watering-log">
                            Watering Log
                        </Button>
                    </Toolbar>
                </AppBar>
                <Container style={{ marginTop: '20px' }}>
                    <Routes>
                        <Route path="/" element={<PlantList />} />
                        <Route path="/add" element={<AddPlant />} />
                        <Route path="/watering-log" element={<WateringLog />} />
                        <Route path="/plants/:id" element={<PlantDetails />} />
                    </Routes>
                </Container>
            </Router>
        </Provider>
    );
}

export default App;
