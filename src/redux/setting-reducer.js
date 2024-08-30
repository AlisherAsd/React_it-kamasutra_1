import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    light: true,
}

const settingSlice = createSlice ({

    name: 'settingPage',
    initialState,
    reducers: {
        changeTheme(state, action) {
            state.light = action.payload
        },
    }
})

export const { changeTheme } = settingSlice.actions
export default settingSlice.reducer