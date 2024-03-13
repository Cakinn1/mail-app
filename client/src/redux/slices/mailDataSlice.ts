import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CategoryProps, MailData, SeenProps } from "../../types/mailTypes";
import { FetchError } from "../../types/errorTypes";

interface FetchState {
  loading: boolean;
  error: FetchError | null;
}
interface MailDataState {
  mail: MailData[];
  helperData: MailData[];
  previousValues: MailData[];
}

const initialState: MailDataState & FetchState = {
  mail: [],
  helperData: [],
  previousValues: [],
  error: null,
  loading: false,
};

export const mailDataSlice = createSlice({
  name: "mailData",
  initialState,
  reducers: {
    filterByCategory: (state, action: PayloadAction<string>) => {
      state.mail = [...state.helperData].filter((item) => {
        return item.category === action.payload;
      });
    },
    filterBySeen: (state, action: PayloadAction<SeenProps>) => {
      // set mail to all inbox data
      if (action.payload.seen === "seen") {
        state.mail = [...state.helperData].filter((item) => {
          return item.category === "inbox";
        });
      } else {
        state.mail = [...state.helperData].filter((item) => {
          return item.seen === action.payload.seen && item.category === "inbox";
        });
      }
    },
    updateSearchValues: (state) => {
      const maxHistoryLength = 5;

      if (state.previousValues.length >= maxHistoryLength) {
        // state.previousValues.shift();
      }
      let newValue = [...state.previousValues];
      newValue.concat(state.mail);
      // console.log(newValue);
      // not working?
      state.previousValues = [...state.previousValues].concat(state.mail);
    },
    handleSeenValue: (state, action: PayloadAction<number>) => {
      state.mail = [...state.mail].map((mail) => {
        return mail.id === action.payload && mail.seen === "not_seen"
          ? { ...mail, seen: "seen" }
          : mail;
      });
    },
    filterBySearchValue: (state, action: PayloadAction<string>) => {
      const searchValue = action.payload.toLowerCase();
      if (searchValue === "" && state.previousValues.length > 0) {
        state.previousValues.pop();

        state.mail = state.previousValues;
        console.log(action.payload);
      } else {
        state.mail = [...state.mail].filter((item) => {
          const inputValue = action.payload.toLowerCase();
          return (
            item.fullName.toLowerCase().includes(inputValue) ||
            item.subject.toLowerCase().includes(inputValue)
          );
        });
      }
    },
    fetchDataStart: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
      state.error = null;
    },
    setMailData: (state, action: PayloadAction<MailData[]>) => {
      state.mail = [...action.payload];
      state.helperData = [...action.payload];
      state.loading = false;
    },
    fetchDataError: (state, action: PayloadAction<FetchError | null>) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteAllMailItems: (state) => {
      state.mail = [];
    },
    filterByPageLocation: (state, action: PayloadAction<string>) => {
      state.mail = [...state.mail].filter(
        (item) => item.category === action.payload
      );
    },
  },
});

export const {
  filterByCategory,
  fetchDataStart,
  setMailData,
  fetchDataError,
  filterBySeen,
  filterBySearchValue,
  updateSearchValues,
  handleSeenValue,
  deleteAllMailItems,
  filterByPageLocation,
} = mailDataSlice.actions;
export default mailDataSlice.reducer;
