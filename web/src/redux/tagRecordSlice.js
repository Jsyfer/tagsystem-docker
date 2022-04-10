import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  id: '',
  name: '',
  group: ''
}

export const tagRecordSlice = createSlice({
  name: 'tagRecord',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setGroup: (state, action) => {
      state.group = action.payload;
    }
  }
})
// Action creators are generated for each case reducer function
export const { setName, setGroup } = tagRecordSlice.actions

export default tagRecordSlice.reducer