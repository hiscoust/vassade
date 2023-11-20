import { createSlice } from "@reduxjs/toolkit"

export const ModalReducer = createSlice({
    name: "Modal",
    initialState: {
        isOpen: false
    },
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload
        }
    }

})

export const { setIsOpen } = ModalReducer.actions
export default ModalReducer.reducer