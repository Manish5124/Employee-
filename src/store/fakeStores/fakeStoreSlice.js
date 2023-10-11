import { createSlice } from "@reduxjs/toolkit";


const initialState={
    product:[],
    error:null

}

const fakeStoreSlice = createSlice({
    name:"fakeStore",
    initialState,
    reducers:{
        setProduct:(state,action)=>{
             return {...state,product:action.payload}
        },
        getProudct:(state,action)=>{
            return state
        },
        getProductFailure:(state,action)=>{
            return {...state,error:action.payload}
        },
        getProductEmpty:(state)=>{
            return {...state,product:[],error:null}
        }

    }
})

export const {setProduct,getProudct,getProductFailure,getProductEmpty} = fakeStoreSlice.actions;
// export const fakeStoreActions = fakeStoreSlice.actions;

export default fakeStoreSlice.reducer;

