import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  fileList:[],
  defaultThumb: ""
}

export const fileSlice = createSlice({
  name: 'filelist',
  initialState,
  reducers: {
    initialFilelist: (state, action) => {
      state.fileList = action.payload;
    },
    initialDefaultThumbnail: (state, action) => {
      state.defaultThumb = action.payload;
    }
  }
})
// Action creators are generated for each case reducer function
export const { initialFilelist,initialDefaultThumbnail } = fileSlice.actions

export default fileSlice.reducer