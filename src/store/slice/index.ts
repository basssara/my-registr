import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../components/types/IUser";

const initialState = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
} as IUser;

const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action: PayloadAction<IUser>) {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
    },
    removeUser(state) {
      state.email = "";
      state.email = "";
      state.email = "";
      state.email = "";
    },
  },
});

export const { setUser, removeUser } = useSlice.actions;
export default useSlice.reducer;
