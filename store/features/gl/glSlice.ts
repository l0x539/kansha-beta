'use client'

import { AppState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit"

type Action<T> = {
  type: string;
  payload: T;
}

export interface GlState {
  currentView: number;
};

const initialState: GlState = {
  currentView: 0
};

const glSlice = createSlice({
  name: 'gl',
  initialState,
  reducers: {
    updateView: (state, action: Action<number>) => {
      state.currentView = action.payload;
    },
    incrementView: (state) => {
      ++state.currentView;
    },
    decrementView: (state) => {
      --state.currentView;
    }
  }
});

export const {
  decrementView,
  incrementView,
  updateView
} = glSlice.actions;

export const selectGl = (state: AppState) => state.gl;

export default glSlice.reducer;