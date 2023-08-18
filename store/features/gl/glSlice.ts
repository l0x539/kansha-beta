'use client'

import { AppState } from "@/store/store";
import { createSlice } from "@reduxjs/toolkit"

type Action<T> = {
  type: string;
  payload: T;
}

export interface GlState {
  currentView: number;
  light: {
      x: number;
      y: number;
      z: number;
  };
  diffuseness: number;
  shininess: number;
  fresnelPower: number;
  iorR: number;
  iorY: number;
  iorG: number;
  iorC: number;
  iorB: number;
  iorP: number;
  saturation: number;
  chromaticAberration: number;
  refraction: number;
  noiseX: number;
  noiseY: number;
  noiseZ: number;
  noiseSpeed: number;
  noiseStrength: number;
  intro: boolean;
};

const initialState: GlState = {
  currentView: 0,
  light: {
    x: -1,
    y: 1,
    z: 1
  },
  diffuseness: 0.2,
  shininess: 15.0,
  fresnelPower: 8.0,
  iorR: 1.15,
  iorY: 1.16,
  iorG: 1.18,
  iorC: 1.22,
  iorB: 1.22,
  iorP: 1.22,
  saturation: 1.03,
  chromaticAberration: 0.04,
  refraction: 0.22,
  noiseX: 1,
  noiseY: 1,
  noiseZ: 1,
  noiseSpeed: 1.05,
  noiseStrength: 0.17,
  intro: true
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
    },
    disableIntro: (state) => {
      state.intro = false;
    }
  }
});

export const {
  decrementView,
  incrementView,
  updateView,
  disableIntro
} = glSlice.actions;

export const selectGl = (state: AppState) => state.gl;

export default glSlice.reducer;