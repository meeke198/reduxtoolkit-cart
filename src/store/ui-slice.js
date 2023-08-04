import {createSlice} from '@reduxjs/toolkit';
const uiSlice = createSlice({
    cartIsVisible: false,
    notitfication: null,
    reducers: {
        toggle(state){
            state.cartIsVisible = !state.cartIsVisible;
        },
        showNotification(state, action){
            state.notitfication = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message
            }
        }
    }
})
export const uiActions = uiSlice.actions;
export default uiSlice;