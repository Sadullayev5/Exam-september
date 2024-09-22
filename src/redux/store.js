import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../redux/slices/authSlice'
import { api } from '../redux/api/index'

const store = configureStore({
    reducer : {
        auth: authReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export {store}