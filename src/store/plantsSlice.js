import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    plants: [],
    wateringLog: [],
    loading: false,
    error: null
};

const plantsSlice = createSlice({
    name: 'plants',
    initialState,
    reducers: {
        setPlants(state, action) {
            state.plants = action.payload;
        },
        addPlant(state, action) {
            console.log('Adding plant to state:', action.payload); // Debugging log
            state.plants.push(action.payload);
        },
        setLoading(state, action) {
            state.loading = action.payload;
        },
        setError(state, action) {
            state.error = action.payload;
        },
        addWateringLog(state, action) {
            state.wateringLog.push(action.payload);
        },
        updateWateringLog(state, action) {
            const index = state.wateringLog.findIndex(log => log.id === action.payload.id);
            if (index !== -1) {
                state.wateringLog[index] = action.payload;
            }
        }
    }
});

export const { setPlants, addPlant, setLoading, setError, addWateringLog, updateWateringLog } = plantsSlice.actions;

export default plantsSlice.reducer;
