import { createSlice } from '@reduxjs/toolkit';





export const dataSlice = createSlice({
  name: 'userinfo',
  initialState:{
    user:[]
  },

  reducers: {
    addUserdata: (state, action) => {
      state.user = action.payload
    },

   

  }

 
});


export const { addUserdata } = dataSlice.actions;

export default dataSlice.reducer;