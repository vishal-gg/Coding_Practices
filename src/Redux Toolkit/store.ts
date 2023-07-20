import {configureStore} from '@reduxjs/toolkit'
import cakeReducer from './features/cake/cakeSlice'
import counterReducer from './features/counter/counterSlice';

 const store = configureStore({
    reducer: {
        cake: cakeReducer,
        counter: counterReducer,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
