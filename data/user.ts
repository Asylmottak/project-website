import { createSlice } from "@reduxjs/toolkit";
import { initialUser } from "@/utils/data";

// Create user slice
export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialUser },
  reducers: {
    loginUser: (state, action) => {
      state.value = {
        ...state.value,
        name: action.payload.name,
        email: action.payload.email,
        image: action.payload.image,
      };
    },
  },
});

// Export actions
export const { loginUser } = userSlice.actions;

// Export user reducer
export default userSlice.reducer;
