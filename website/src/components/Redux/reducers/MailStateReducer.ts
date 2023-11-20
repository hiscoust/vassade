import { createSlice } from "@reduxjs/toolkit"

export const MailStateReducer = createSlice({
    name: "Mailstate",
    initialState: {
        isError: false,
        MailSent: false,
        isLoading: false
    },
    reducers: {
        setMailSendingFailed: (state, action) => {
            state.isError = action.payload
        },
        setMailStatusSucceed: (state, action) => {
            if (action.payload) {
                state.isError = false;
                state.MailSent = true
                return
            }
            state.MailSent = false

        },
        setIsLoading: (state, action) => { state.isLoading = action.payload }
    }

})

export const { setMailSendingFailed, setMailStatusSucceed, setIsLoading } = MailStateReducer.actions
export default MailStateReducer.reducer