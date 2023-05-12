import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../Redux/Features/user';
import informationReducer from './Features/information';

export const store = configureStore({
    reducer: {
        user: userReducer,
        introduction: informationReducer
    }
});

