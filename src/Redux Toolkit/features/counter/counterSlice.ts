
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    totalCount: 20
}

const countSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state, action) => {
            state.totalCount+=action.payload || 0
        },
        decrement: (state) => {
            state.totalCount--
        }
    }
})

export default countSlice.reducer
export const {increment, decrement} = countSlice.actions