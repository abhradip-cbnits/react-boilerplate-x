import { configureStore } from '@reduxjs/toolkit';
import informationReducer from './Features/information';

export const store = configureStore({
    reducer: {
        introduction: informationReducer
    }
});

