import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getDefaultTheme } from 'utils/selectors';

export interface IAppState {
  isFetching: boolean;
  isError: null | string;
  isSuccessed: boolean;
  isLoaded: boolean;
  wsState: boolean;
  theme: TAppTheme;
}

const initialState: IAppState = { 
  isFetching: false,
  isError: null,
  isSuccessed: false,
  isLoaded: false,
  wsState: false,
  theme: getDefaultTheme()
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
    setAppTheme(state, action: PayloadAction<TAppTheme>)   {
      state.theme = action.payload;
    },
    setWsConnectionState(state, action: PayloadAction<boolean>)   {
      state.wsState = action.payload;
    }
  },
});

export const { 
  setAppFetching, 
  setAppError, 
  setAppSuccess, 
  setAppLoaded, 
  setAppTheme, 
  setWsConnectionState 
} = app.actions;
export default app.reducer;