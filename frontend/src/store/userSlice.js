// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   user: null
// };

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserDetails: (state, action) => {
//       state.user = action.payload;
//     },
//     clearUserDetails: (state) => {
//       state.user = null;
//     }
//   }
// });

// export const { setUserDetails, clearUserDetails } = userSlice.actions;

// export default userSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

const storedUser = localStorage.getItem("user");

const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // 🔥 persist
    },
    clearUserDetails: (state) => {
      state.user = null;
      localStorage.removeItem("user"); // 🔥 cleanup
    }
  }
});

export const { setUserDetails, clearUserDetails } = userSlice.actions;
export default userSlice.reducer;

