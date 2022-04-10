import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  allTags:{},
  tagList:[],
  groupList:[],
  checkedTags:[]
}

export const tagSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {
    addCheckedTag: (state,action) => {
      if(action.payload.checked){
        state.checkedTags.push(action.payload.tagId);
      }else{
        state.checkedTags = state.checkedTags.filter(item => item !== action.payload.tagId );
      }
    },
    deleteTag: (state) => {
      console.log("delete tag");
    },
    initialTags: (state, action) => {
      state.allTags = action.payload;
      state.tagList.length = 0;
      Object.entries(action.payload).forEach(tagGroup=>{
        tagGroup[1].forEach(tag=>{
          if(state.tagList.filter(innerTag => innerTag.id === tag.id).length > 0){
            let index = state.tagList.findIndex(x => x.id === tag.id);
            if(index !== -1){
              state.tagList[index] = tag;
            }
          }else {
            state.tagList.push(tag);
          }
        })
      });
      Object.keys(action.payload).forEach(groupName => {
        if(state.groupList.filter(innerGroupName => innerGroupName === groupName).length <= 0){
          state.groupList.push(groupName);
        }
      });
    }
  }
})
// Action creators are generated for each case reducer function
export const { addCheckedTag, deleteTag, initialTags } = tagSlice.actions

export default tagSlice.reducer