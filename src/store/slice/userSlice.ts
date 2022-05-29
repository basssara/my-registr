import { fetchUsers } from "./actionCreator";
import { IData } from "./../../components/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../components/types/IUser";

const initialState: IData = {
  user: [],
  isLoading: false,
  isError: "",
};

const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isError = "";
    },
    [fetchUsers.pending.type]: (state, action) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.isError = "Something Wrong!";
    },
  },
});

export default useSlice.reducer;
