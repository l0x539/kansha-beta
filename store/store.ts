'use client'

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import appReducer from './features/app/appSlice';
import glReducer from './features/gl/glSlice';

export function makeStore() {
  return configureStore({
    reducer: {
      app: appReducer,
      gl: glReducer
    },
  })
}

const store = makeStore()

export type AppState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action<string>
>

export default store
