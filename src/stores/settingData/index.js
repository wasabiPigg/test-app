import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';

//slice
export const initialState = {
    settingData: {
        backGround: { editable: true },
        texts: { editable: true },
        shadows: { editable: true },
        items: { editable: true },
    }

};

export const SettingDataSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        initSettingData: () => initialState,
        editSettingData: (state, action) => {
            state.settingData = action.payload
        },
    },
});

//reducer
export const settingDataReducer = SettingDataSlice.reducer;


//action
export const { editSettingData } = SettingDataSlice.actions;

//selector
export const useSettingDataSelector = () => {
    return useSelector((state) => state.settingData.settingData);
}
