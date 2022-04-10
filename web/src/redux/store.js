import { configureStore } from '@reduxjs/toolkit'
import tagReducer from './tagSlice'
import fileReducer from './fileSlice'
import fileTagReducer from './fileTagSlice'

export const store = configureStore({
  reducer: {
    tags: tagReducer,
    files:fileReducer,
    fileTags:fileTagReducer
  },
})