import { configureStore, createSlice } from "@reduxjs/toolkit";


const messageInitialState = {
    message: [
        { message: "Hello", time: "12:35:37 AM", name: "Friend", millSecond: 2 },
        { message: "hey", time: "12:35:37 AM", name: "User", millSecond: 56, userId: 1 },
        { message: "How are you?", time: "12:35:37 AM", name: "Friend", millSecond: 78 },
        { message: "All good, What's about you?", time: "12:35:37 AM", name: "USer", millSecond: 34, userId: 1 },
    ]
}
const messageSlice = createSlice({
    name: "message",
    initialState: messageInitialState,
    reducers: {
        sendMessage(state, { payload }) {
            console.log(payload);
            const newMsgs = [...state.message, payload];
            state.message = newMsgs;
        }
    }
});

const store = configureStore({
    reducer: {
        message: messageSlice.reducer
    }
});


export const messageAction = messageSlice.actions
export default store;
