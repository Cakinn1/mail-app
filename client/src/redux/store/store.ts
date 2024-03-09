import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../slices/counterSlice";
import mailDataSlice from "../slices/mailDataSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    mailData: mailDataSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
