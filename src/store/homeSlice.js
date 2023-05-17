import { createSlice } from '@reduxjs/toolkit'

export const homeSlice = createSlice({
  name: 'home',
  initialState: {
    url: {},
    genres: {}
  },
  reducers: {
   getApiConfiguration: (state, action) => {
       state.url = action.payload;
   },
   getGenRes: (state, action) => {
       state.genres = action.payload;
   },
  },
})

export const { getApiConfiguration, getGenRes } = homeSlice.actions

export default homeSlice.reducer