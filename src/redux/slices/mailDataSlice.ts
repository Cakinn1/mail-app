import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { MailData } from "../../types/mailTypes";
import { FetchError } from "../../types/errorTypes";

interface FetchState {
  loading: boolean;
  error: FetchError | null;
}
interface MailDataState {
  mail: MailData[];
}

const initialState: MailDataState & FetchState = {
  mail: [],
  error: null,
  loading: false,
};

export const mailDataSlice = createSlice({
  name: "mailData",
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<{ category: string }>) => {
      state.mail = state.mail.filter((item) => {
        return item.category === action.payload.category;
      });
    },
    fetchDataStart: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setMailData: (state, action: PayloadAction<MailData[]>) => {
      state.mail = action.payload;
      state.loading = false;
    },
    fetchDataError: (state, action: PayloadAction<FetchError | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { filterByCategory, fetchDataStart, setMailData, fetchDataError } =
  mailDataSlice.actions;
export default mailDataSlice.reducer;
