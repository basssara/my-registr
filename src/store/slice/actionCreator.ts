import { IUser } from "./../../components/types/IUser";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../apis/axios";

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, thunkApi) => {
    try {
      const res = await axiosInstance.get<IUser[]>("");
      return res.data;
    } catch (e) {
      thunkApi.rejectWithValue("Cann not find users");
    }
  }
);
