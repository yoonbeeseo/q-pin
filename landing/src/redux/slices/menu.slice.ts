import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from ".."

const slice = createSlice({
  name: "menuSlice",
  initialState: {
    isMenuActive: false,
  },
  reducers: {
    menuReducer: (state, action: PayloadAction<"toggle" | "on" | "off">) => {
      switch (action.payload) {
        case "off":
          state.isMenuActive = false
          return state
        case "on":
          state.isMenuActive = true
          return state
        case "toggle":
          state.isMenuActive = !state.isMenuActive
          return state
      }
    },
  },
})

export const menuSlice = slice.reducer
export const selectIsMenuActive = (state: RootState) => state.menuSlice.isMenuActive

export const { menuReducer } = slice.actions
