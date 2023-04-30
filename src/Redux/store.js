import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/Features/user';

export const store = configureStore({
    reducer: {
        user: userReducer
    }
});

