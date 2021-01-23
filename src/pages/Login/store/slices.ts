import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ILoginState {
  isSuccessRegister: boolean;
}

const initialState: ILoginState = { 
  isSuccessRegister: false,
};

const name = '@login';

const app = createSlice({
  name,
  initialState,
  reducers: {
    setRegistr(state, action: PayloadAction<string>) {
      state.isSuccessRegister = action.payload === 'USER_CREATED';
    }
  },
});

export const { setRegistr } = app.actions;
export default app.reducer;