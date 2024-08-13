import { configureStore } from '@reduxjs/toolkit'
import userSliceReducer from './slices/userSlice'
import commonSliceReducer from './slices/commonSlice'
import preferenceSliceReducer from './slices/preferenceSlice'
export const store = configureStore({
  reducer: {
    userStore:userSliceReducer,
    commonStore:commonSliceReducer,
    preferenceStore:preferenceSliceReducer
  },
})