
import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    totalCakes: 20
}

const cakeSlice = createSlice({
    name: 'cakeStore',
    initialState,
    reducers: {
        order: (state) => {
            state.totalCakes--
        },
        restock: (state, action) => {
            state.totalCakes+=action.payload
        }
    }
})

export default cakeSlice.reducer
export const {order, restock} = cakeSlice.actions