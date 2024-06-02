import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async (_, {rejectWithValue}) => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1',
      );
      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);
