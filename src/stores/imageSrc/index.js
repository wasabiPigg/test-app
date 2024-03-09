import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';


//slice
export const initialState = {
    fileData: undefined,
};

export const ImageSlice = createSlice({
    name: 'image',
    initialState,
    reducers: {
        initFileDate: () => initialState,
        editFileData: (state, action) => {

            state.image = action.payload

        },
    },
});

//reducer
export const imageReducer = ImageSlice.reducer;


//action
export const { editFileData } = ImageSlice.actions;

//selector
export const useFileDataSelector = () => {
    return useSelector((state) => state.image.image);
}
