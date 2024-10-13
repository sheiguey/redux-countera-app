import {createSlice} from '@reduxjs/toolkit'

const initialAuthState ={isAuthenticate:false};

const AuthSlice = createSlice({
    name:'authentication',
    initialState:initialAuthState,
    reducers:{
        Login(state){
            state.isAuthenticate=true;
        },
        Logout(state){
            state.isAuthenticate=false;
        }
    }
});

export const actionsAuth = AuthSlice.actions;

export default AuthSlice.reducer;