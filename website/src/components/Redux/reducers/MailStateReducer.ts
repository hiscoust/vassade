import { createSlice } from "@reduxjs/toolkit"

export const MailStateReducer = createSlice({
    name: "Mailstate",
    initialState: {
        isError: false,
        MailSuccess: false
    },
    reducers: {
        setMailSendingFailed: (state, action) => {
            state.isError = action.payload
        },
        setMailStatusSucceed: (state, action) => {
            state.MailSuccess = action.payload
        }
    }

})

export const { setMailSendingFailed, setMailStatusSucceed } = MailStateReducer.actions
export default MailStateReducer.reducer