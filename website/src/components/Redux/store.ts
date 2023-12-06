"use client"

import { configureStore } from "@reduxjs/toolkit";
import MailStateReducer from "./reducers/MailStateReducer";

export const store = configureStore({
    reducer: {
        MailState: MailStateReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch