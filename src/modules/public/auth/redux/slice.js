import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, // Logged-in user data
    isAuthenticated: false, // Authentication status
  },
  reducers: {
    setCredentials: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    clearCredentials: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

// Export actions
export const { setCredentials, clearCredentials } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
