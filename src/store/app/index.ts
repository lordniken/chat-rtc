import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IAppState {
  isFetching: boolean;
  isError: null | string;
  isSuccessed: boolean;
  isLoaded: boolean;
}

const initialState: IAppState = { 
  isFetching: false,
  isError: null,
  isSuccessed: false,
  isLoaded: false,
};

const name = '@app';

const app = createSlice({
  name,
  initialState,
  reducers: {
    setAppFetching(state, action: PayloadAction<boolean>) {
      state.isFetching = action.payload;
    },
    setAppError(state, action: PayloadAction<null | string>) {
      state.isError = action.payload;
    },   
    setAppSuccess(state, action: PayloadAction<boolean>) {
      state.isSuccessed = action.payload;
    }, 
    setAppLoaded(state, action: PayloadAction<boolean>) {
      state.isLoaded = action.payload;
    },      
  },
});

export const { setAppFetching, setAppError, setAppSuccess, setAppLoaded } = app.actions;
export default app.reducer;