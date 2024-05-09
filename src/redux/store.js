import { configureStore, createSlice } from "@reduxjs/toolkit";

// Create a slice for managing the theme state
const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
  },
  reducers: {
    toggleTheme(state) { // Reducer function to toggle the theme mode
      state.mode = state.mode === "light" ? "dark" : "light"; // Toggle between light and dark mode
    },
  },
});

// Extract the toggleTheme action creator
export const { toggleTheme } = themeSlice.actions;

// Configure the Redux store with the theme slice reducer
const store = configureStore({
  reducer: {
    theme: themeSlice.reducer, // Add the theme slice reducer to the store
  },
});

export default store;