import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  fileTagList:[],
  tagListL: [],
  tagListR: [],
  tagSelectL: [],
  tagSelectR: []
}

export const fileTagSlice = createSlice({
  name: 'fileTags',
  initialState,
  reducers: {
    initialFileTags: (state, action) => {
      state.fileTagList = action.payload.fileTagList;
      state.tagListR = action.payload.fileTagList;
      state.tagListL = action.payload.tagList.filter(tag => !state.tagListR.some(tagR => tagR.name === tag.name));
      state.tagSelectL = [];
      state.tagSelectR = [];
    },
    moveBetweenList: (state, action) => {
      if(action.payload === 'L'){
        state.tagListL.forEach(tag => {
          if(state.tagSelectL.some(select => select === tag.id.toString())){
            state.tagListR.push(tag);
          }
        })
        state.tagListL = state.tagListL.filter(tag => !state.tagSelectL.some(select => select === tag.id.toString()));
      }else if (action.payload === 'R'){
        state.tagListR.forEach(tag => {
          if(state.tagSelectR.some(select => select === tag.id.toString())){
            state.tagListL.push(tag);
          }
        })
        state.tagListR = state.tagListR.filter(tag => !state.tagSelectR.some(select => select === tag.id.toString()));
      }
    },
    updateTagSelect: (state, action) => {
      if (action.payload.listIdentifier === 'L') {
        if(action.payload.checked){
          state.tagSelectL.push(action.payload.tagId);
        }else{
          state.tagSelectL = state.tagSelectL.filter(item => item !== action.payload.tagId );
        }
      }else if (action.payload.listIdentifier === 'R'){
        if(action.payload.checked){
          state.tagSelectR.push(action.payload.tagId);
        }else{
          state.tagSelectR = state.tagSelectR.filter(item => item !== action.payload.tagId );
        }
      }
    }
  }
})
// Action creators are generated for each case reducer function
export const { initialFileTags,moveBetweenList,updateTagSelect} = fileTagSlice.actions

export default fileTagSlice.reducer