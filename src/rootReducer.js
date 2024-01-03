
import {createReducer} from "@reduxjs/toolkit"

export const rootReducer=createReducer({
    isAuthenticated:false
},{
    loginRequest:(state)=>{
        state.isAuthenticated=false
    },
    loginSuccess:(state)=>{
        state.isAuthenticated=true
    },
    loginFail:(state)=>{
        state.isAuthenticated=false
    },

    logoutRequest:(state)=>{
        state.isAuthenticated=true
    },
    logoutSuccess:(state)=>{
        state.isAuthenticated=false
    },
    logoutFail:(state)=>{
        state.isAuthenticated=true
    },

  

})