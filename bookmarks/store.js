import { configureStore } from '@reduxjs/toolkit'
import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware'
import { userApi } from './src/services/userApi'

export const store = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (curryGetDefaultMiddleware) =>{
    return curryGetDefaultMiddleware().concat(userApi.middleware)
  }
})