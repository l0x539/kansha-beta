'use client'

import { AppState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit"

type Action<T> = {
  type: string;
  payload: T;
}

export interface MenuState {
  isMenuOpen: boolean;
};

const initialState: MenuState = {
  isMenuOpen: false,
};

const appSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    openMenu: (state) => {
      state.isMenuOpen = true;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
    togleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    setMenuOpen: (state, {payload}: Action<boolean>) => {
      state.isMenuOpen = payload;
    }
  }
});

export const {
  openMenu,
  closeMenu,
  togleMenu,
  setMenuOpen
} = appSlice.actions;

export const selectApp = (state: AppState) => state.app;

export default appSlice.reducer;