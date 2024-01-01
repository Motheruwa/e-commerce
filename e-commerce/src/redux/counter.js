import {createSlice} from "@reduxjs/toolkit";
const initialState={
    cartitem:[]
}
export const counterSlice = createSlice({
    name : "counter",
    initialState,
    reducers: {
        increment: (state,action) => {
            state.cartitem.push(action.payload)
        },
        decrement: (state,action) => {
            const i= state.cartitem.findIndex((item)=>item.id===action.payload)
            state.cartitem.splice(i,1);
        },
       
    }
});
export const selectcartitem=(state)=>state.counter.cartitem
export const {increment, decrement} = counterSlice.actions
export default counterSlice.reducer;