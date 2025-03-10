import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    eventID: null,
    isEdit: false,
};

const authSlice = createSlice({
    name: "events",
    initialState,

    reducers: {
        getEventID(state, action) {
            const { id, isEdit } = action.payload;
            state.eventID = id;
            state.isEdit = isEdit;
        },
    },
});

export const { 
    getEventID,
} = authSlice.actions;

export default authSlice.reducer;