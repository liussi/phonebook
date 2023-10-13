import { logOut, login, refreshUser, register } from './operations';


const { createSlice } = require('@reduxjs/toolkit');
// export const authInitialState = {
//   user: { name: null, email: null },
//   token: null,
//   isLoggedIn: false,
//   isRefreshing: false,
// };
export const authSlise = createSlice({
  name: 'auth',
  initialState : {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
    isRefreshing: false,
  },
  extraReducers: builder => {
    builder
      .addCase(register.pending, (state, action) => state)
      .addCase(register.fulfilled, (state, action) => {
      
        state.user = action.payload.user;
       
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => state)
      .addCase(login.pending, (state, action) => state).addCase(login.fulfilled, (state, action) => {
         state.user = action.payload.user;

         state.token = action.payload.token;
         state.isLoggedIn = true;
      }).addCase(login.rejected, (state, action) => action)
      .addCase(logOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
      })
  },
});

export const authReduser = authSlise.reducer;
