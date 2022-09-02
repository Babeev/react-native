import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';
import { postAuth } from '../../api/auth/postAuthEndpoint';
import { getUser } from '../../api/user/getUserEndpoint';
import { User } from '../../types/user';

interface UserState {
  userId: number;
  userName: string;
  role: string;
}

const initialState: UserState = {
  userId: 0,
  userName: '',
  role: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId(state, action: PayloadAction<number>) {
      state.userId = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addMatcher(postAuth.matchFulfilled, (state, action) => {
        const { jwt } = action.payload;

        AsyncStorage.setItem('jwt', jwt).then(() => {
          const decoded = jwt_decode(jwt) as User;

          state.userId = decoded.userId;
        });
      })
      .addMatcher(getUser.matchFulfilled, (state, action) => {
        const { userName, role } = action.payload;

        state.userName = userName;
        state.role = role;
      }),
});

export const { setUserId } = userSlice.actions;

export default userSlice.reducer;
