import { configureStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import userReducer from './user/slice'
import cartReducer from './cart/slice'



export const store = configureStore({
  reducer: {
    userReducer,
    cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})