import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: {
        user: null,
        token: null,
        refreshToken: null,
    },
    register: {
        user: null,
        error: false,
        ErrorMessage: null,
    },
    forgetPasswordInfo: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,

    reducers: {
        setCredentials(state, action) {
            const { accessToken, refreshToken, userInfo } = action.payload;
            state.login.user = userInfo;
            state.login.token = accessToken;
            state.login.refreshToken = refreshToken;
        },

        setAvatar(state, action) {
            state.login.user.avatar = action.payload;
        },

        logout(state) {
            state.login.user = null;
            state.login.token = null;
        },

        register(state, action) {
            state.register.user = action.payload;
            state.register.error = false;
        },

        clearRegister(state) {
            state.register = {
                user: null,
                error: false,
                ErrorMessage: null,
            };
        }, 

        forgetPassword(state, action) {
            state.forgetPasswordInfo = action.payload;
        },

        clearForgetPassword(state) {
            state.forgetPasswordInfo = null;
        },
    },
});

export const { 
    setCredentials, 
    setAvatar, 
    logout, 
    register, 
    clearRegister, 
    forgetPassword, 
    clearForgetPassword, 
} = authSlice.actions;

export default authSlice.reducer;