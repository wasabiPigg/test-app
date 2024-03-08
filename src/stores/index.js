import { imageReducer } from './imageSrc';
import { configureStore } from '@reduxjs/toolkit';
import { settingDataReducer } from './settingData';

export const store = configureStore({
    reducer: {
        image: imageReducer,
        settingData: settingDataReducer
    },
    devTools: true,
});

export default store;
