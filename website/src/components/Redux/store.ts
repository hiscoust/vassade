"use client"

import { configureStore } from "@reduxjs/toolkit";
import MailStateReducer from "./reducers/MailStateReducer";
import ModalReducer from "./reducers/Modal";



export const store = configureStore({
    reducer: {
        MailState: MailStateReducer,
        ModalState: ModalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch