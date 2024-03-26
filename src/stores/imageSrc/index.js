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
        editAvatarImage: (state, action) => {
            console.log("editAvatarImage")
            state.avatarImage = action.payload
        },
        editWearingImage: (state, action) => {
            console.log("editWearingImage")
            state.wearingImage = action.payload
        },
        editBackgroundImage: (state, action) => {
            console.log("editBackgroundImage")
            state.backgroundImage = action.payload
        },
    },
});

//reducer
export const imageReducer = ImageSlice.reducer;


//action
export const { editAvatarImage, editWearingImage, editBackgroundImage } = ImageSlice.actions;

//selector
export const useAvatarImageSelector = () => {
    return useSelector((state) => state.image.avatarImage);
}

export const useWearingImageSelector = () => {
    return useSelector((state) => state.image.wearingImage);
}

export const useBackgroundImageSelector = () => {
    return useSelector((state) => state.image.backgroundImage);
}
