// import { createSlice, current } from "@reduxjs/toolkit";

// const initialState = {
//     currentUser : null,
//     error:null,
//     loading:false

// }

// const userSlice = createSlice({
//     name: 'user',
//     initialState,


//     reducers: {
//         signInStart: (state) => {
//             state.currentUser = true;
//         },
//         signInSuccess: (state, action) => {
//             state.currentUser=action.payload;
//             state.loading=false; 
//             state.error = null;
//         },
//         sugnInFailure: (state, action) => {
//             state.error=action.payload;
//             state.loading = false;
//         }
//     }
// });

// export const { signInStart,signInSuccess,sugnInFailure} = userSlice.actions;

// export default userSlice.reducer; 

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null,
    error: null,
    loading: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,

    //functions
    //Action’s payload carries the
    //data necessary to update the application state.
    reducers: {
        signInStart: (state) => {
            state.loading = true;
        },
        signInSuccess: (state, action) => {
            state.currentUser = action.payload;
            state.loading = false;
            state.error = null;
        },
        signInFailure: (state, action) => {
            state.error = action.payload;
            state.loading = false;
        }
    }
});

export const { signInStart, signInSuccess, signInFailure } = userSlice.actions;

export default userSlice.reducer;